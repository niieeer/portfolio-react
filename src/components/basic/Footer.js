import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <p>© Beaudouin Clément. - Tous droits réservés.</p>
            <div className='flex-icon'>
                <a href="https://www.linkedin.com/in/clément-beaudouin-1b445b250/">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/niieeer">
                    <FaGithub />
                </a>
            </div>
        </footer>
    );
};

export default Footer;