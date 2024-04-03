import  { useEffect } from 'react'
import { API_OPTIONS } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopular} from '../Redux/movieSlice'

const usePopular = () => {
    const dispatch=useDispatch()
   const popularMovies=useSelector(store=>store.movies.popular)
  const generatePopular=async ()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
    const res=await data.json()
    dispatch(addPopular(res.results))
    
  }

  useEffect(()=>{
  !popularMovies && generatePopular();
  },[])
}

export default usePopular;
