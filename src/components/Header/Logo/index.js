import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
      <img src='/static/images/logo.png' alt='logo' />
    </Link>
  );
}

export default Logo;
