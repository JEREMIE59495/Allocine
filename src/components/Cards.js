import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cards = ({film}) => {
    let bouton ;
    let idMovie=[];
    let tabIdMovie =[]

    const addStorage =()=>{
        window.localStorage.film = film.id
    }
   
    const [toggleState,setToggleState]= useState(false);

    //Ajouter un element au storage
    const favorite=()=>{ 
        //On recupere les element de lobj selectionné
        let favoris =film.title+';'+film.backdrop_path+';'+film.id
        //On recupere le local storage
        let existing=localStorage.getItem('favoris')
        //On regardi si 1 element existe si oui on mets une virgule
        existing = existing ? existing.split(',') : [];
        idMovie=existing
        //On envoie les element au local storage
        existing.push(favoris)
        localStorage.setItem('favoris',existing.toString()) 
        setToggleState(!toggleState)   
    }
 let idFilm =film.id
        
    const removeFavoris=()=>{   
        let tabOfId=[]
        let newTab;

        //On recupere le local storage
        let exist = localStorage.getItem('favoris')
        exist = exist ? exist.split(',') : [];
        // On destructure en faisant uen boucle
        exist.map((tab)=>{ 
            //On recupere l'index
            tabOfId=exist.indexOf(tab)  
            if (tab.split(';')[2]==idFilm){
                newTab=tabOfId;
            }
        }) 

        //On enleve cette element par l index
        exist.splice(newTab,1) 
        //on envoie au local storage
        localStorage.setItem('favoris',exist.toString())        
                
        setToggleState(!toggleState)
    } 

    // ON CONTROLE LE STORAGE AU DEPART
    bouton = <button id="addFavoris"className='add-color btn-size' onClick={favorite}>Add</button>
     
    //On recupere le storage 
    let storage=localStorage.getItem('favoris')
    storage = storage ? storage.split(',') : [];
       
    for(let i=0;i<storage.length;i++){
        let movieList=storage[i].split(";")
        let idMovie =movieList[2]
        tabIdMovie.push(idMovie)
        tabIdMovie.map((movie)=>{
            if(  film.id==movie){
                bouton= <button className='remove-color btn-size' onClick={removeFavoris}>Remove</button>}
            }
    )}


    return (
        <div className='card'>  
            <div className='poster'>
                <img className='affiche' src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`} alt={`affiche ${film.title}`}/>  
            </div>

            <div className='description'>
                <div className='description_title'>
                    <p className='title'>{film.title}</p>
                    <p className='info'>{film.release_date} | {film.vote_average}/10 ({film.vote_count})</p>
                </div>
                <div className='div_btn'>
                    <Link to="/detail">
                        <button className='detail-color btn-size' onClick={()=>addStorage()}>Détail</button>
                    </Link>
                    {bouton}  
                </div>
            </div>
        </div>
    );
};

export default Cards;