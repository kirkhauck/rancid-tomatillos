import React from "react";
import tomatilloImg from "../../assets/tomatillo.png"
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
      <img className="logo" src={tomatilloImg} />
      <h1>Rancid Tomatillos</h1>
    </div>
  );
}
export default Header;