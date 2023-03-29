import React from 'react';
import Presentation from '../components/Presentation';

import Footer from '../components/basic/Footer';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Navigation from '../components/basic/Navigation';


const Home = () => {
    return (
        <div className=''>
            <Navigation />
            <Presentation />
            <Hero />
            <Skills />
            <Experience />
            <Footer />
        </div>
    );
};

export default Home;