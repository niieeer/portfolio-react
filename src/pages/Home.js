import React from 'react';
import Presentation from '../components/Presentation';

import Footer from '../components/basic/Footer';
import Hero from '../components/Hero';
import Skills from '../components/Skills';


const Home = () => {
    return (
        <div className=''>
            <Presentation />
            <Hero />
            <Skills/>
            <Footer />
        </div>
    );
};

export default Home;