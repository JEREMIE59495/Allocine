import React ,{useState,useEffect}from 'react';
import { movieId } from '../components/api';



const Detail = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{   
        movieId()
        .then((res)=>setData(res.data));
    },[]);
    return (
        
        <div className='details'>  
            <h1>{data.title}</h1> 
            <div className='detail_bloc'>
                <div className='poster_movie'>
                    <img className='affiche' src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt={`affiche ${data.title}`}/>  
                </div>
                <div className='description_movie'>
                    <p>Réalisé le : {data.release_date}</p>
                    <h3>Synopsis</h3>
                    <p>{data.overview}</p>
                    <div className='note'>
                        <p>Moyenne : {data.vote_average}/10  </p>
                        <p className='votes'>{data.vote_count} votes</p>
                        <p>Popularité : {data.popularity}</p>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Detail;