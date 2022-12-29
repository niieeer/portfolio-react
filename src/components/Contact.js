import React from 'react';

const Contact = () => {
    return (
        <div className='contact-container'>
            <h2>Démarrons un projet ensemble, n’hésitez pas à me contacter</h2>
            <form action="">
                <input type="text" placeholder='Nom' minLength="1" maxLength="20" required />
                <input type="email" placeholder='Adresse e-mail' maxLength="50" required />
                <textarea placeholder='Votre message' required maxLength="1000"></textarea>
                <input type="submit" value="Me contacter" />
            </form>
        </div>
    );
};

export default Contact;