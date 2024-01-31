import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='nav-logo'>
        <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>
      </div>

      <div className='nav-links'>
        <ul>
          <li><NavLink to={"/offerings"}>offerings</NavLink></li>
            <li><NavLink to={"/features"}>features</NavLink></li>
            <li><NavLink to={"/how"}>how</NavLink></li>
            <li><NavLink to={"/whyus"}>why Us</NavLink></li>
            <li className='getaccess'><NavLink to={"/getaccess"}>GET ACCESS</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
