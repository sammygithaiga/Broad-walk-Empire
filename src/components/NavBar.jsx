
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/header"/>Header</li>
        <li><Link to="/Footer"/>Footer</li>
      </ul>
    </nav>
  );
};

export default Navbar;
