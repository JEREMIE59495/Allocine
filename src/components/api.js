import axios from "axios";

export const getAllMovie=()=>{  
   
 return axios
        .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=6c96d79bf66aed241beb96eff283df85" 
        )
    
}
 
export const movieId=()=>{
   const idMovie = localStorage.getItem('film')
    return axios
    .get(
        `https://api.themoviedb.org/3/movie/${idMovie}?api_key=6c96d79bf66aed241beb96eff283df85`   
    )
}



 

  
