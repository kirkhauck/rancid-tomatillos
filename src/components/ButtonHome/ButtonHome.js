import React from 'react'; 
import PropTypes, { shape } from 'prop-types'
import './ButtonHome.css'
import { Link } from 'react-router-dom'

const ButtonHome = () => { 

  return ( 
    <Link to="/">
      <button className="button-home">Home</button>
    </Link>
  ); 
} 

export default ButtonHome;

ButtonHome.propTypes = {
  resetState: PropTypes.func,
}