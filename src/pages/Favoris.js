import React from 'react';

const Favoris = () => {
    const favoris = localStorage.getItem('favoris')
    console.log(favoris)
    let tabFavoris =[];
    if(!!favoris ){
        let splitStorage = favoris.split(',')
  
        for(let i=0;i<splitStorage.length;i++){
            let splitTab =splitStorage[i].split(';')
            tabFavoris.push(splitTab) } 
           
    }
     return (
                <div>
                    
                    <h1>Mes favoris</h1>
                    <ul >   
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