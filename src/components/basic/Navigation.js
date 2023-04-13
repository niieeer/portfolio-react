import React, { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {

  const navRef = useRef();

  const toggleNavMobile = () => {
    navRef.current.classList.toggle('mobile-active');
  }

  const hideNavMobile = () => {
    navRef.current.classList.remove('mobile-active');
  }

  return (
    <header>
      <nav ref={navRef} className='nav-container'>
        <a href="#h-container" onClick={hideNavMobile}>About me</a>
        <a href="#skills" onClick={hideNavMobile}>Technical Skills</a>
        <a href="#experience" onClick={hideNavMobile}>Experience</a>
        <button className='nav-btn nav-close-btn' onClick={toggleNavMobile}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={toggleNavMobile}>
        <FaBars />
      </button>
    </header >
  );
};


export default Navigation;