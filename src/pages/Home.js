import React from 'react';
import Contact from '../components/Contact';
import Description from '../components/Description';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Perk from '../components/Perk';


const Home = () => {
    return (
        <div className=''>
            <Navigation />
   
            <Hero/>
            {/* Description */}
            <Description/>

            <Perk />

            <Contact />

            <Footer />
        </div>
    );
};

export default Home;