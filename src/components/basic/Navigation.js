import React, { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {

  const navRef = useRef();

  const toggleNavMobile = () => {
    navRef.current.classList.toggle('mobile-active');
    console.log(navRef.current.classList);
  }
  

  return (
    <header>
      <nav ref={navRef} className='nav-container'>
        <a href="#h-container">About me</a>
        <a href="#h-container">Technical Skills</a>
        <a href="#h-container">Experience</a>
      </nav>
      <button className='nav-btn'>
        <FaBars onClick={toggleNavMobile} />
      </button>
      <button>
        <FaTimes onClick={toggleNavMobile} />
      </button>
    </header >
  );
};

export default Navigation;