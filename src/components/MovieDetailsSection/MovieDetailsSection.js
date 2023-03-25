import React from 'react';
import './MovieDetailsSection.css';


const MovieDetailsSection = ({details}) => {
 
    return (
      <div className='movie-details'>
      <h1>{details.movie.title}</h1>
      <p>{details.movie.release_date}</p>
      <p>{details.movie.overview}</p>
      <p>{details.movie.genres}</p>
      <p>{details.movie.budget}</p>
      <p>{details.movie.revenue}</p>
      <p>{details.movie.runtime}</p>
      <p>{details.movie.tagline}</p>
      <p>{details.movie.average_rating}</p>
      </div>
    );
  
}

export default MovieDetailsSection;

