import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className=''>
            <Navigation />
            <div className='container'>
                <h1 className='container-title'>Développeur WEB et WEB mobile</h1>
            </div>
            <div className='profil-container'>
                <h2>Hi im Clément, i'm a WEB développeur</h2>
                <p>Blablabla</p>
            </div>
            <Footer />
        </div>
    );
};

export default Home;