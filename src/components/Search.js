import React from 'react';

const search = () => {
    return (
        <div className="nav-search">
            <input className=" search" type="search" placeholder='search' />
            <select>
                <option>Anglais</option>
                <option>Francais</option>
            </select>
            <button type="submit">envoyer</button>
        </div>
    );
};

export default search;