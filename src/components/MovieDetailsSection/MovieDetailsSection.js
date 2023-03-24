import React from 'react';
import './MovieDetailsSection.css';


const MovieDetailsSection = ({title, release_date, overview, genres, budget, revenue, runtime, tagline, average_rating}) => {
 
    return (
      <div className='movie-details'>
      <h1>{title}</h1>
      <p>{release_date}</p>
      <p>{overview}</p>
      <p>{genres}</p>
      <p>{budget}</p>
      <p>{revenue}</p>
      <p>{runtime}</p>
      <p>{tagline}</p>
      <p>{average_rating}</p>
      </div>
    );
  
}

export default MovieDetailsSection;

