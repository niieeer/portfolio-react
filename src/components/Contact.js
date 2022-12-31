import React from 'react';
import { useRef } from 'react';


const Contact = () => {

    const emailInputRef = useRef();
    const nomInputRef = useRef();
    const textInputRef = useRef();

    // Récupération et vérification de la valeur des champs input et envoie des données au serveur 
    const submitHandler = (event) => {

        event.preventDefault();

        console.log(emailInputRef.current.value);

        // Envoie des données
    }


    return (
        <div className='contact-container'>
            <h2>Démarrons un projet ensemble, n’hésitez pas à me contacter</h2>
            <form action="" onSubmit={submitHandler}>
                <input type="text" ref={nomInputRef} placeholder='Nom' minLength="1" maxLength="20" required />
                <input type="email" ref={emailInputRef} placeholder='Adresse e-mail' maxLength="50" required />
                <textarea placeholder='Votre message' ref={textInputRef} required maxLength="1000"></textarea>
                <input type="submit" value="Me contacter" />
            </form>
        </div>
    );
};

export default Contact;