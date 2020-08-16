import React, { useState, useEffect } from "react";
import axios from "../../request/axios";
import BASE_URL from "../../request/constant";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";

export const Row = ({
  title,
  fetchUrl,
  isLargeSize,
  trailerUrl,
  setTrailerUrl,
}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "450",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  function isValid(name) {
    return name != null && name !== "";
  }

  function getValidMovieName(movie) {
    if (isValid(movie.title)) return movie.title;
    if (isValid(movie.name)) return movie.name;
    if (isValid(movie.original_name)) return movie.original_name;
    return "";
  }

  function setTrailer(movie) {
    const validName = getValidMovieName(movie);
    movieTrailer(validName)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl({ trailerUrl: urlParams.get("v"), row: title });
      })
      .catch((error) => console.log(error));
  }

  const handleImageClick = (movie) => {
    if (trailerUrl.trailerUrl) {
      setTrailerUrl({ row: null, trailerUrl: null });
      setTimeout(() => setTrailer(movie), 300);
    } else setTrailer(movie);
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
              <img
                onClick={() => handleImageClick(movie)}
                className={
                  isLargeSize
                    ? "movie-row-poster movie-row-posterLarge"
                    : "movie-row-poster"
                }
                src={
                  isLargeSize
                    ? `${BASE_URL}${movie.poster_path}`
                    : `${BASE_URL}${movie.backdrop_path}`
                }
                alt={getValidMovieName(movie)}
                key={movie.id}
              />
            )
        )}
      </div>
      {trailerUrl?.row === title && (
        <YouTube videoId={trailerUrl?.trailerUrl} opts={opts} />
      )}
    </div>
  );
};
