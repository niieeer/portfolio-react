import React from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Perk from '../components/Perk';


const Home = () => {
    return (
        <div className=''>
            {/* Header */}
            <Navigation />
            {/* Container 1 */}
           
            {/* Container 2 */}
            <Hero/>
            {/* <div id='flex w-full'>
                <div className='divider'>
                    <h2>Hi im Clément, i'm a WEB développeur</h2>
                    <p>Young web developer having acquired his title, I am now looking for a job. Curious, self-taught and motivated I will give the best of myself to succeed.</p>
                </div>
            </div> */}
            {/* Container 3 */}
            <Perk />
            {/* Container 4 */}
            <Contact />
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;