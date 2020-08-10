import React from 'react';
import { useState, useEffect } from 'react';
// import Logo from '../images/logo.svg';

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    // navbar only appears when the user scroll down the page
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`navbar ${show && 'nav_black'}`}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png'
        alt='Logo'
        className='nav_logo'
      />

      <img
        src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
        alt='avatar'
        className='nav_avatar'
      />
    </div>
  );
};

export default Navbar;
