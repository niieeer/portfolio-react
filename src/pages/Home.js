import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import image from '../styles/images/homme.png'

const Home = () => {
    return (
        <div className=''>
            <Navigation />
            <div className='container'>
                <h1 className='container-title'>Développeur WEB et WEB mobile</h1>
            </div>
            <div className='profil-container'>
                <img class="fit-picture"
                    src={image}
                    alt="Moi"
                    height="800px" />
                <div className='profil-desc'>
                    <h2>Hi im Clément, i'm a WEB développeur</h2>
                    <p>Blablabla</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;