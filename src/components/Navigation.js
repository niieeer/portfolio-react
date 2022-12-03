import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className='navigation'>
            <h2 className='name'><span className='bold-name'>clement</span> beaudouin</h2>
            <ul>
                <NavLink to='/' className='nav-link'>
                    <li>Acceuil</li>
                </NavLink>
                <NavLink to='/profile' className='nav-link'>
                    <li>Profil</li>
                </NavLink>
                <NavLink to='*' className='nav-link'>
                    <li>Autre pages</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;