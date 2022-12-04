import React from 'react';
import Navigation from '../components/Navigation';
import { Navigate } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <Navigation />
            <div className='error-container'>
                <p className='error-code'>404</p>
                <p className='error-type'>Not Found</p>
                <p className='explanation-error'>The ressource requested could not be found on this server!</p>
            </div>
            {/* <Navigate from="*" to="/"/> */}
        </div>
    );
};

export default Error;