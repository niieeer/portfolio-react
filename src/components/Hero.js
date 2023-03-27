import React from 'react';
import Title from './basic/Title';

const Hero = () => {
    return (
        <div id='h-container'>
            <Title title='About me' />
            <section className='container-d'>
                <div className='left-d'>
                    <img src="./images/profil/bg.png" alt="Photo de moi" />
                </div>
                <div className='right-d'>
                    <p>
                        Hello and welcome to my beginner developer portfolio! I'm Clément, a passionate developer who has just started his career in the programming field.
                    </p>
                    <p>
                        Through my studies and personal projects, I have developed strong programming and web development skills using technologies such as HTML, CSS, JavaScript, React. I have also worked on database projects using MySQL, mariaDB.
                    </p>
                    <p>
                        On this portfolio, you will be able to discover my development projects, which I have completed using my current skills. I have worked on both personal and academic projects, which have a variety of features and applications.
                    </p>
                    <p>
                        Feel free to explore my portfolio and contact me if you have any questions or are interested in collaborating. Thank you for visiting and have a nice day!
                    </p>
                </div>
            </section>
        </div>
    );
};
export default Hero;