import React ,{useState,useEffect}from 'react';
import axios from "axios";

const Movie = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios
        .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=6c96d79bf66aed241beb96eff283df85" 
        )
        .then((res)=>setData(res.data));
        console.log(data)
    },[]);

    return (
        <div>toto</div>
    );
};

export default Movie;