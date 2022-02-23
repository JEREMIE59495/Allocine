import React ,{useState,useEffect}from 'react';
import axios from "axios";
import Card from './Cards';

const Movie = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios
        .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=6c96d79bf66aed241beb96eff283df85" 
        )
        .then((res)=>setData(res.data.results));
       console.log(data);
    
    },[]);
   
    return (
        <div><ul>
            {data.map((film)=>(
                <Card film={film} key={film.title}/>
            ))}
            
            </ul></div>
    );
};

export default Movie;