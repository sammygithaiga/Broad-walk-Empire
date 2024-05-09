

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='grid gap-7'> 
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>

      
    </nav>
  );
};

export default Navbar;
