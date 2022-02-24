import React from 'react';
import Search from '../components/Search';
import Movie from '../components/Movie';

const accueil = () => {
    
    return (
        <div className='pages'>
           
            <Search />
            <Movie />
        </div>
   
    );
};

export default accueil;