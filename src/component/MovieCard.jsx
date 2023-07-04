import React from "react";

const MovieCard = () => {
  return (
    <div className="movie-card">
      <div className="movie-thumbnail">
        <img src="shazam.webp" alt="Movie Poster" />
      </div>
      <div className="movie-card-details flex-c-c">
        <h3 className="movie-title">Movie Title</h3>
        <div className="movie-ratings flex-c-c">
          <p className="movie-rating">8.5%</p>
          <p className="movie-rating">9.2%</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
