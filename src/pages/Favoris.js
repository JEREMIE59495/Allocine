import React from 'react';

const Favoris = () => {
    const favoris = localStorage.getItem('favoris')
    console.log(favoris)
    let tabFavoris =[];
    if(favoris !=null){
        let splitStorage = favoris.split(',')
        //TODO : Gérer l'erreur de la console :(Warning: Each child in a list should have a unique "key" prop.)
        
        for(let i=0;i<splitStorage.length;i++){
            let splitTab =splitStorage[i].split(';')
            tabFavoris.push(splitTab) } 
    }
    
    console.log(tabFavoris)
    return (
        <div>
            
            <h1>Mes favoris</h1>
            <ul>
                
                {tabFavoris.map((fav)=>(
                    <div className='div_favoris'>
                    <img className="favoris_img"src={`https://image.tmdb.org/t/p/original${fav[1]}`} alt={`affiche ${fav[0]}`}/>
                    <h2 className='title_favoris'>{fav[0]}</h2>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Favoris;