import React from 'react';
import './MovieCard.css';


const MovieCard = ({title, average_rating, release_date, poster_path }) => {

  
  return (
    <div className='movieCard'>
      <img className='movieCard' src={poster_path}/>
     <h3>{title}</h3>
      <p>{average_rating}</p>
      <>{release_date}</>
    </div>
  )
}

export default MovieCard;