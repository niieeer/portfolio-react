import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className='navigation'>
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