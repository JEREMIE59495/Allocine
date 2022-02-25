import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cards = ({film}) => {
    let bouton ;

    const addStorage =()=>{
        window.localStorage.film = film.id
    }

    const [toggleState,setToggleState]= useState(false);

    const favorite=()=>{ 
        let favoris =film.title+';'+film.backdrop_path+';'+film.id
        let existing=localStorage.getItem('favoris')
        console.log(favoris)
        existing = existing ? existing.split(',') : [];
       // console.log(existing)
        existing.push(favoris)
        localStorage.setItem('favoris',existing.toString()) 
        setToggleState(!toggleState)   
    }

let toto;

    const removeFavoris=()=>{
        let idFilm =film.id
        let exist =[]
        let newTab=[]
        exist = localStorage.getItem('favoris')
        exist = exist ? exist.split(',') : [];
        //console.log(exist)
         exist.map((tab)=>{
              toto =tab.split(";")[2]
              console.log(toto)

             if (toto==idFilm)
                newTab=exist.indexOf(tab)
               // console.log(newTab)
                    //TODO CONTROLER LES VALEURS DANS LE LOCALSTORAGE
                exist.splice(newTab,1)
                localStorage.setItem('favoris',exist.toString())        
        })
        //console.log(exist)
        setToggleState(!toggleState)
    }

    if(!toggleState){
        bouton = <button id="addFavoris"className='add-color btn-size' onClick={favorite}>Add</button>
        }else {
         bouton= <button className='remove-color btn-size'onClick={removeFavoris}>Remove</button>
        }


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