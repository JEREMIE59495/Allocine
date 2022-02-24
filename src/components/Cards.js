import React from 'react';

const cards = (props) => {
    const {film} = props
    console.log(props)

    console.log(film)
    return (
        <div className='card'>  
            <div className='poster'>
                <img className='affiche' src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`} alt={`affiche ${film.title}`}/>
              
            </div>
            <div className='description'>
                <div className='description_title'>
                    <p className='title'>{film.title}</p>
                    <p className='info'>{film.release_date} | {film.vote_average} ({film.vote_count})</p>
                </div>
                <div className='div_btn'>
                    <button className='detail-color btn-size'>détail</button>
                    <button className='add-color btn-size'>Add</button>
                  {/*  <button className='remove-color btn-size'>Remove</button>*/}

                </div>
            </div>
            

    
        
        </div>
    );
};

export default cards;