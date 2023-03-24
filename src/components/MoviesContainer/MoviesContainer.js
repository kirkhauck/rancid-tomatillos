import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.css';

const MoviesContainer = ({ movieData, selectMovie }) => {
  const movies = movieData.movies.map(movie => {
    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        poster_path={movie.poster_path}
        backdrop_path={movie.backdrop_path}
        title={movie.title}
        average_rating={movie.average_rating}
        release_date={movie.release_date}
        selectMovie={selectMovie}
      />
    )
  });

  return(
    <div className='movie-grid'>
      {movies}
    </div>
  );
}

export default MoviesContainer;