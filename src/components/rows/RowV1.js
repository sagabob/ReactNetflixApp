import React, { useState, useEffect } from "react";
import axios from "../../request/axios";
import BASE_URL from "../../request/constant";

import "./RowV1.css";

export const RowV1 = ({ title, fetchUrl }) => {
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
    <div className="rowWrapper">
      <h2>{title}</h2>
      <div className="rowContainer">
        {movies.map(
          (movie, index) =>
            movie.backdrop_path !== "" &&
            movie.backdrop_path != null &&
            movie.poster_path !== "" &&
            movie.poster_path != null && (
              <div className="item" key={index}>
                <img
                  onClick={() => handleImageClick(movie)}
                  src={`${BASE_URL}${movie.backdrop_path}`}
                  alt={getValidMovieName(movie)}
                  className="imageImage"
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};
