import {useEffect} from 'react'
import { API_OPTIONS } from '../constants'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../Redux/movieSlice';

const useTrailerVideo = (id) => {
    const dispatch=useDispatch();
const getTrailerMovies=async ()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US", API_OPTIONS)
    const res=await data.json();

    const trailers=res.results.filter(item=>item.type==="Trailer")
    const trailer=trailers.length?trailers[0]:res.results[0]
    dispatch(addTrailerVideo(trailer))
    
}
useEffect(()=>{
    getTrailerMovies();
},[])
}

export default useTrailerVideo
