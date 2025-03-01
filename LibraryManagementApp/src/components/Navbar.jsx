import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <>
          <Link>MyLibrary</Link>
          <Link to='home'>Home</Link>
          <Link to='/Login'>Login</Link>
          <Link to='/Register'>Register</Link>
      </>
  )
}

export default Navbar