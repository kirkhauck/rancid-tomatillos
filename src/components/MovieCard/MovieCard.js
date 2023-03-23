import React from 'react';
import './MovieCard.css';


const MovieCard = () => {

  
  return (
    <div className='movieCard'>
      <img className='movieCard' src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"></img>
     <h3>Money Plane</h3>
      <p>Rating : 6.6</p>
      <>Release Date: 2020-09-29 </>
    </div>
  )
}

export default MovieCard;