import React from 'react'; 
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