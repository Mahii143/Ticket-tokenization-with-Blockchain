import React from 'react'

import MovieCard from './MovieCard';

const EventSection = () => {
  return (
    <div className="movie-section-container flex-c-c">
      <h1>EVENTS</h1>
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
  )
}

export default EventSection;