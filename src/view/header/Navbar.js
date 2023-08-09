import React from 'react';
import './navbar.css';

const Navbar = ({ onAboutClick }) => {
  
  return (
    <div className="nav">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <div className="menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="https://projects.stake-take.com/" target='_blank'>Projects</a></li>
          <li><a href="https://explorer.stake-take.com/" target='_blank'>Explorer</a></li>
          <li><a href="https://github.com/StakeTake/guidecosmos" target='_blank'>Guides</a></li>
          <li><a href="#" onClick={onAboutClick}>About</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
