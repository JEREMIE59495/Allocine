import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Movie from '../components/Movie';

const accueil = () => {
    
    return (
        <div className='pages'>
            <Header />
            <Search />
            <Movie />
        </div>
   
    );
};

export default accueil;