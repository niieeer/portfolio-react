import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className='navigation'>
            <h2 className='name'><span className='bold-name'>clement</span> beaudouin</h2>
            <ul>
                <Link to='/'>
                    <li>Acceuil</li>
                </Link>
                <Link to='/profile'>
                    <li>Profil</li>
                </Link>
                <Link to='*'>
                    <li>Autre pages</li>
                </Link>
            </ul>
        </div>
    );
};

export default Navigation;