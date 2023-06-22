import React from "react";

import MovieCard from "./MovieCard";

const MovieSection = () => {
  return (
    <div className="movie-section-container flex-c-c">
      <h1>MOVIES</h1>
      <div className="movie-cards-container flex-c-c">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default MovieSection;
