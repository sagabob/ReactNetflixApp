import React from "react";
import "./BannerV2.css";
import { useState, useEffect } from "react";
var classNames = require("classnames");

const BannerV2 = ({ slides }) => {
  const IMAGE_PARTS = 4;
  const AUTOCHANGE_TIME = 4000;

  let changeTO = null;

  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(false);

  function changeSlides(change) {
    window.clearTimeout(changeTO);
    const length = slides.length;
    const prevSlideValue = activeSlide;
    let activeSlideValue = prevSlideValue + change;
    if (activeSlideValue < 0) activeSlideValue = length - 1;
    if (activeSlideValue >= length) activeSlideValue = 0;

    setActiveSlide(activeSlideValue);
    setPrevSlide(prevSlideValue);
  }

  const runAutochangeTO = () => {
    changeTO = setTimeout(() => {
      changeSlides(1);
    }, AUTOCHANGE_TIME);
  };

  useEffect(() => {
    runAutochangeTO();
    setTimeout(() => {
      setSliderReady(true);
    }, 300);

    return () => {
      window.clearTimeout(changeTO);
    };
  });

  function GetImageWithIndex(index, i) {
    const listLength = slides.length;

    const newIndex = (index + i) % listLength;

    return slides[newIndex].img;
  }

  return (
    <div className={classNames("slider", { "s--ready": sliderReady })}>
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            className={classNames("slider__slide", {
              "s--active": activeSlide === index,
              "s--prev": prevSlide === index,
            })}
            key={slide.city}
          >
            <div className="slider__slide-parts">
              {[...Array(IMAGE_PARTS).fill()].map((x, i) => (
                <div className="slider__slide-part" key={i}>
                  <div
                    className="slider__slide-part-inner"
                    style={{
                      backgroundImage: `url(${slide.img})`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="slider__control" onClick={() => changeSlides(-1)} />
      <div
        className="slider__control slider__control--right"
        onClick={() => changeSlides(1)}
      />
    </div>
  );
};

export default BannerV2;
