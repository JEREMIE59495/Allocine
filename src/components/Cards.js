import React from 'react';
import { Link } from 'react-router-dom';

const cards = (props) => {
    const {film} = props
    
    const addStorage =()=>{
       
        window.localStorage.film = film.id
    }

    const favorite=()=>{ 
        let favoris =film.title+';'+film.backdrop_path
        var existing=localStorage.getItem('favoris')
        existing = existing ? existing.split(',') : [];
        existing.push(favoris)
        localStorage.setItem('favoris',existing.toString())
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
                    <button className='add-color btn-size' onClick={()=>favorite()}>Add</button>
                  {/*  <button className='remove-color btn-size'>Remove</button>*/}

                </div>
            </div>
        </div>
    );
};

export default cards;