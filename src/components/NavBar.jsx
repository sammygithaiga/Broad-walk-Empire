import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-gray-800 text-white py-4'> 
      <ul className='flex justify-between px-8'>
        <li>
          <NavLink to="/" className='mr-4' activeClassName='font-bold'>LogIn</NavLink>
        </li>
        <li>
          <NavLink to="/Home" className='mr-4' activeClassName='font-bold'>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className='mr-4' activeClassName='font-bold'>About</NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
