import React, { useEffect, useState } from "react";
import axios from "../request/axios";
import BASE_URL from "../request/constant";
import "./Banner.css";
import NButton from "./NButton";

const Banner = ({ title, fetchUrl }) => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );

      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${BASE_URL}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bannerContent">
        <h1 className="bannerHeading">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className="bannerDescription">{movie?.overview}</h1>
        <div>
          <NButton
            className={"bannerButton"}
            iconClassName={"fas fa-play-circle"}
            name={"Play"}
          />
          <NButton
            className={"bannerButton"}
            iconClassName={"fas fa-play-circle"}
            name={"More Info"}
          />
        </div>
      </div>
      <div className="bannerFadeBottom"></div>
    </header>
  );
};

export default Banner;
