import React from 'react';
import "./NavBar.css"

const NavBar = () => {
    return ( <>
      <div id="main">
      <div id="icon">Booking.Dot</div>
      <div id="about">
        <a to="/" className="navBar">
          Rent
        </a>
        <a to="/ABOUT" className="navBar">
          Buy
        </a>
        <a to="/PROJECT" className="navBar">
          Sell
        </a>
        <a to="/RESUME" className="navBar">
          House-Type
        </a>
        <a href="https://www.google.com/" target="_blank" className="navBar">
          Login
        </a>
      </div>
    </div>
    </> );
}
 
export default NavBar;