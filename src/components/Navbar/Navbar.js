import React from 'react';
import './Navbar.css';

const Navbar = ({ Poetry, Story, Articles, currentCategory, toggleTheme, darkMode }) => {

  const handleMenuClick = () => {
    const checkbox = document.getElementById('active');
    checkbox.checked = false; // Close the menu
  };

  return (
    <nav className="navbar">
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      <div className="navbar-heading">
        <h2>Rudra's Dungeon</h2>
        <h3>{currentCategory}</h3> 
      </div>
      <div className="wrapper">
        <ul>
          <li><button onClick={() => {Poetry(); handleMenuClick();}}>Poetry</button></li>
          {/* <li><button onClick={() => {Story(); handleMenuClick();}}>Story</button></li> */}
          <li><button onClick={() => {Articles(); handleMenuClick();}}> कविता</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
