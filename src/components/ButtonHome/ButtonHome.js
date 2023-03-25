import React from 'react'; 
import PropTypes, { shape } from 'prop-types'
import './ButtonHome.css'

const ButtonHome = ({resetState, clearMovieId}) => { 
  const goHome = () => {
    resetState()
    clearMovieId()
  }
  
  return ( 
    <div>
    <button onClick={goHome}>Home</button>
    </div> 
    
  ); 
  
} 

export default ButtonHome;

ButtonHome.propTypes = {
  resetState: PropTypes.func,
  clearMovieId: PropTypes.func
}