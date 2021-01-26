import React, { useState, useEffect } from "react";
import axios from "../../request/axios";
import BASE_IMAGE_URL from "../../request/constant";

import "./Row.css";

/*
From version 2
*/

export const Row = ({ title, fetchUrl, isLargeSize }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  function isValid(name) {
    return name != null && name !== "";
  }

  function getValidMovieName(movie) {
    if (isValid(movie.title)) return movie.title;
    if (isValid(movie.name)) return movie.name;
    if (isValid(movie.original_name)) return movie.original_name;
    return "";
  }

  const handleImageClick = (movie) => {};

  return (
    <div className="carousel">
      <h2>{title}</h2>
      <div className="carousel-row">
        {movies.map(
          (movie, index) =>
            movie.backdrop_path !== "" &&
            movie.backdrop_path != null &&
            movie.poster_path !== "" &&
            movie.poster_path != null && (
              <div
                key={index}
                className={
                  isLargeSize ? "carousel-tile tile__large" : "carousel-tile"
                }
              >
                <div className="tile__media">
                  <img
                    onClick={() => handleImageClick(movie)}
                    src={
                      isLargeSize
                        ? `${BASE_IMAGE_URL}${movie.poster_path}`
                        : `${BASE_IMAGE_URL}${movie.backdrop_path}`
                    }
                    alt={getValidMovieName(movie)}
                    className="tile__img"
                  />
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
