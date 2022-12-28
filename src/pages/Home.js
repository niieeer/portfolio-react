import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Perk from '../components/Perk';


const Home = () => {
    return (
        <div className=''>
            {/* Header */}
            <Navigation />
            {/* Container 1 */}
            <div className='container'>
                <h1 className='container-title'>Développeur WEB et WEB mobile</h1>
            </div>
            {/* Container 2 */}
            <div id='profil-container'>
                <img class="fit-picture"
                    src='./images/homme.png'
                    alt="Moi"
                    height="800px" />
                <div className='profil-desc'>
                    <h2>Hi im Clément, i'm a WEB développeur</h2>
                    <p>Young web developer having acquired his title, I am now looking for a job. Curious, self-taught and motivated I will give the best of myself to succeed.</p>
                </div>
            </div>
            {/* Container 3 */}
            <Perk />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;