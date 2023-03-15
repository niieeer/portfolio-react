import React from 'react';

const Description = () => {
    return (
        <div className="custom-c">
            <div className="container">
                <div className='profil-description'>
                    <img src="../../images/placeholder.jpg" alt='some value' className="max-w-sm" />
                    <p>Nom: Clément BEAUDOUIN</p>
                    <p>Age: 21 ans</p>
                    <p>Ville: REIMS (51)</p>
                    <p>Permis en cours</p>
                </div>
                <div className='custom'>
                    <h1 className="text-5xl font-bold py-5">À propos de moi</h1>
                    <p className="py-3">
                        Bonjour et bienvenue sur mon portfolio de développeur débutant ! Je suis [votre nom], un développeur passionné qui vient juste de commencer sa carrière dans le domaine de la programmation.
                    </p>
                    <p className="py-3">
                        Au cours de mes études et de mes projets personnels, j'ai acquis de solides compétences en programmation et en développement web, en utilisant des technologies telles que [nommer les technologies que vous maîtrisez, par exemple HTML, CSS, JavaScript, React, etc.]. J'ai également travaillé sur des projets de base de données en utilisant [nommer les technologies de base de données que vous avez utilisées].
                    </p>
                    <p className="py-3">
                        Sur ce portfolio, vous pourrez découvrir mes projets de développement, que j'ai réalisés en utilisant mes compétences actuelles. J'ai travaillé sur des projets personnels et des projets académiques, qui présentent une variété de fonctionnalités et d'applications.
                    </p>
                    <p className="py-3">
                        Je suis fier de mes compétences actuelles et je suis enthousiasmé par l'opportunité de travailler sur des projets de développement plus avancés et complexes. Je suis également ouvert aux collaborations et aux opportunités de travail en équipe.
                    </p>
                    <p className="py-3">
                        N'hésitez pas à explorer mon portfolio et à me contacter si vous avez des questions ou si vous êtes intéressé par une collaboration. Merci de votre visite et bonne journée !
                    </p>
                    <div className='flex gap-1 justify-between py-5'>
                        <button className='btn btn-active btn-secondary'><a href="#contact">Me Contacter</a></button>
                        <button className='btn btn-active btn-primary'><a href="">Mon CV en format PDF</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;