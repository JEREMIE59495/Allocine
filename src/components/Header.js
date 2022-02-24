import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <div className="head">
            <p>AlloMovie</p>
            <ul className='link-bloc'>
                <Link to="/">
                <li className='link'>Home</li>
                </Link>
                <Link to="/favoris">
                <li className='link'>Favoris</li>
                </Link>
            </ul>
        </div>
    );
};

export default header;