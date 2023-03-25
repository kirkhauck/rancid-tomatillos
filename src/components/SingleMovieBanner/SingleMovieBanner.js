import React from 'react';
import PropTypes from 'prop-types';
import './SingleMovieBanner.css';


const SingleMovieBanner = ({image}) => {
  return (
    <div>
      <img className="banner" src={image} />
    </div>
  );
}

SingleMovieBanner.propTypes = {
  image: PropTypes.string.isRequired
}

export default SingleMovieBanner;