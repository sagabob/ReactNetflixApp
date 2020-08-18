import React, { useState, useEffect } from "react";
import axios from "../../../request/axios";
import BASE_URL from "../../../request/constant";
import "./Row.css";

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

  const handleImageClick = (movie) => {
    console.log(movie);
  };

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-row-posters">
        {movies.map(
          (movie) =>
            movie.backdrop_path !== "" &&
            movie.backdrop_path != null &&
            movie.poster_path !== "" &&
            movie.poster_path != null && (
              <div
                className={
                  isLargeSize
                    ? "movie-row-poster movie-row-posterLarge"
                    : "movie-row-poster"
                }
                key={movie.id}
              >
                <img
                  onClick={() => handleImageClick(movie)}
                  src={
                    isLargeSize
                      ? `${BASE_URL}${movie.poster_path}`
                      : `${BASE_URL}${movie.backdrop_path}`
                  }
                  alt={getValidMovieName(movie)}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};
