import React from "react";
import MovieCard from "./MovieCard";

const MovieContainer = ({
  movies,
  setMovies,
  selectedMovie,
  setSelectedMovie,
}) => {
  return (
    <div className="movieContainer">
      {movies.map((movie) => {
        <MovieCard
          movie={movie}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          setMovies={setMovies}
        />;
      })}
    </div>
  );
};

export default MovieContainer;
