import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("../../../images/back.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Web Developer</h1>
            <p className="mb-5">I am looking for a permanent job (full time) in Reims and surroundings from December 2022.
</p>
            <button className="btn btn-primary"><a href="#perks">Get Started</a></button>
          </div>
        </div>
      </div>
    );
};

export default Hero;