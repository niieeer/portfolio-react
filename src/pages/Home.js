import React from 'react';
import Presentation from '../components/Presentation';

import Footer from '../components/basic/Footer';
import Hero from '../components/Hero';


const Home = () => {
    return (
        <div className=''>
            <Presentation />
            <Hero />
            <Footer />
        </div>
    );
};

export default Home;