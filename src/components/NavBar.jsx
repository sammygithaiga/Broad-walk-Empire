import { Link, NavLink } from 'react-router-dom';
import '../index.css'

const Navbar = () => {
  return (
    <nav className='nav'> 
    <NavLink className='login' to="/">LogIn</NavLink>

        <NavLink to="/Home">Home</NavLink>

        <NavLink to="/about">About</NavLink>

      
    </nav>
  );
};

export default Navbar;
