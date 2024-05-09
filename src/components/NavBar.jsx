

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=''> 
    <NavLink to="/">LogIn</NavLink>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/about">About</NavLink>

      
    </nav>
  );
};

export default Navbar;
