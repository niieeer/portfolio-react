import React from 'react';

const Card = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="../../../images/placeholder.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New project is released!</h2>
                    <p>Click the button to go on my Github app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;