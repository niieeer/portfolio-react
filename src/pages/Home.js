import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';


const Home = () => {
    return (
        <div className=''>
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
            <div className='perk'>
                    <h2>Project developed during my formation :</h2>
                <div className='perk-description'>
                    <ul>
                        <li>
                            ProjectSchool
                            <p>Projet visant à ce que prof et éleve puissent consulter les notes ajouté.
                                C'est un travail réalisé en duo !
                            </p>
                            <a href="https://github.com/niieeer/ProjectSchool-Front">Github</a>
                        </li>
                        <li>
                            NoodCat
                            <p>Le but de l'application est de pouvoir réserver une table dans un bar à chat.</p>
                            <a href="https://github.com/niieeer/NoodCat">Github</a>
                        </li>
                        <li>
                            Dentiio
                            <p>Le client peut consulter ses avancées médicales ainsi que prendre rendez-vous et parler avec son dentiste.</p>
                            <a href="https://github.com/PaulineMahut/dentiio">Github</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;