import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

    // Récupération et vérification de la valeur des champs input et envoie des données au serveur 
    const form = useRef();
    console.log(process.env.REACT_APP_SERVICE_ID);
    
    // Envoie des données
    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <div className='contact-container'>
            <h2>Démarrons un projet ensemble, n’hésitez pas à me contacter</h2>
            <form action="" ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Nom' minLength="1" maxLength="20" required />
                <input type="email" placeholder='Adresse e-mail' maxLength="50" required />
                <textarea placeholder='Votre message' required maxLength="1000"></textarea>
                <input type="submit" value="Me contacter" />
            </form>
        </div>
    );
};

export default Contact;