import React from 'react';

const Contact = () => {
    return (
        <div className='contact-container'>
            <h2>Démarrons un projet ensemble, n’hésitez pas à me contacter</h2>
            <input type="text" value={'Nom'}/>
            <input type="text" value={'Adresse e-mail'}/>
            <textarea value={'Votre message'}></textarea>
            <input type="button" value="Me contacter" />
        </div>
    );
};

export default Contact;