import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.scss'

const NavBar = () => {
  return (
    <div className='NavBar'>
      <Link to='/' className='NavBar__link'>Home</Link>
      <Link to='/introduce' className='NavBar__link'>Introduce</Link>
      <Link to='/projects' className='NavBar__link'>Projects</Link>
    </div>
  );
};

export default NavBar;
