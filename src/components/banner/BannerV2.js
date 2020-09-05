import React from "react";
import "./BannerV2.css";
import { useState, useEffect } from "react";
import axios from "../../request/axios";
import BASE_URL from "../../request/constant";
var classNames = require("classnames");

const BannerV2 = ({ fetchUrl }) => {
  const IMAGE_PARTS = 4;
  const AUTOCHANGE_TIME = 5000;

  let changeTO = null;

  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(false);

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  function changeSlides(change) {
    window.clearTimeout(changeTO);
    const length = movie.length;
    const prevSlideValue = activeSlide;
    let activeSlideValue = (prevSlideValue + change + length) % length;

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
    const listLength = movie.length;

    const newIndex = (index + i) % listLength;

    return `${BASE_URL}${movie[newIndex]?.poster_path}`;
  }

  return (
    <div className={classNames("slider", { "s--ready": sliderReady })}>
      <div className="slider__slides">
        {movie.map((slide, index) => (
          <div
            className={classNames("slider__slide", {
              "s--active": activeSlide === index,
              "s--prev": prevSlide === index,
            })}
            key={index}
          >
            <div className="slider__slide-parts">
              {[...Array(IMAGE_PARTS).fill()].map((x, i) => (
                <div className="slider__slide-part" key={i}>
                  <img
                    alt={slide.title}
                    className="slider__slide-part-inner"
                    src={GetImageWithIndex(index, i)}
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
