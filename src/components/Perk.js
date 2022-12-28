import React from 'react';

const Perk = () => {
    return (
        <div className='perk'>
            <h2>Project developed in my training:</h2>
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
                    <li>
                        LookMovies
                        <p>Le site à pour but de consulter tout les films du moments à l'aide d'une recherche avec l'API TMDb </p>
                        <a href="https://github.com/niieeer/tp_film">Github</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Perk;