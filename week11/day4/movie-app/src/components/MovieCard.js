import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, setSelectedMovie, selectedMovie, setMovies }) => {
  const navigate = useNavigate();

  const showMovieDetails = (movie) => {
    setSelectedMovie(movie);
    setMovies([]);
    navigate("/movieInfo");
  };

  return (
    <div>
      <h1>{movie?.Title}</h1>
      <img src={movie?.Poster} alt="" onClick={() => showMovieDetails(movie)} />
    </div>
  );
};

export default MovieCard;
