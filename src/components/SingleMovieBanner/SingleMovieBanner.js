import React from 'react';
import './SingleMovieBanner.css';


const SingleMovieBanner = ({image}) => {
 
    return (
      <div>
      <img
        className="banner"
        src={image}
      />
      </div>
    );
  
}

export default SingleMovieBanner;