import React ,{useState,useEffect}from 'react';

import Card from './Cards';
import  { getAllMovie } from "./api"
const Movie  = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        getAllMovie()
        .then((res)=>setData(res.data.results))
        
            
    },[]);

        //test
        const [searchTerm,setSearchTerm]=useState("")

        const handleSearchTerm=()=>{
           
          let val = document.getElementById('search').value
           console.log(val);
         // let toto= e.target.value
           setSearchTerm(val)
              console.log(searchTerm);
       }
    
   
    return (
        <div >
            <div className="nav-search">
            <input className=" search" type="text" placeholder='search' id="search" />
            <select>
                <option>Anglais</option>
                <option>Francais</option>
            </select>
            <button onClick={handleSearchTerm}>envoyer</button>
        </div>
            <ul className='card-list'>
            {data
            .filter((film)=>{
                console.log(film.original_title.toLowerCase().includes(searchTerm));
                return film.original_title.includes(searchTerm)
            })
            .map((film)=>(
                <Card film={film} key={film.title}/>
            ))}
            
            </ul>
        </div>
    );
};

export default Movie;