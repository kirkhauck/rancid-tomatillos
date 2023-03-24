import React from 'react';
import './SingleMovieBanner.css';


const SingleMovieBanner = ({poster_path}) => {
 
    return (
      <div>
      <img
        className="banner"
        src={poster_path}
      />
      </div>
    );
  
}

export default SingleMovieBanner;