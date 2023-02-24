import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

    // Récupération et vérification de la valeur des champs input et envoie des données au serveur 
    const form = useRef();

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
            <h2 className='card-title'>Let's start a project together, don't hesitate to contact me</h2>
            <form action="" ref={form} onSubmit={sendEmail}>
                <input className='input input-bordered w-full' type="text" placeholder='Name' minLength="1" name="user_name" maxLength="20" required />
                <input className='input input-bordered w-full' type="email" placeholder='Adresse e-mail' name="user_email" maxLength="50" required />
                <textarea className="textarea textarea-bordered" placeholder='Your message' name="message" maxLength="1000" required />
                <input className='btn btn-active btn-primary' type="submit" value="Contact me" />
            </form>
        </div>
    );
};

export default Contact;