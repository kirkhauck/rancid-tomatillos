import React from 'react';
import './MovieCard.css';
import PropTypes, { shape } from 'prop-types'


const MovieCard = ({id, title, average_rating, release_date, poster_path, selectMovie }) => {

  console.log(selectMovie, "hi")
  return (
    <div className='movieCard' onClick={() => selectMovie(id)}>
      <img className='movieCard' src={poster_path}/>
     <h3>{title}</h3>
      <p>{average_rating}</p>
      <>{release_date}</>
    </div>
  )
}

export default MovieCard;

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  average_rating: PropTypes.number,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  selectMovie: PropTypes.func
  

}