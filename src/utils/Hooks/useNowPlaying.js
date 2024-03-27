import  { useEffect } from 'react'
import { API_OPTIONS } from '../constants'
import { useDispatch } from 'react-redux'
import { addnowPlaying } from '../Redux/movieSlice'

const useNowPlaying = () => {
    const dispatch=useDispatch()

  const generateNowPlaying=async ()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
    const res=await data.json()
    console.log(res)
    dispatch(addnowPlaying(res.results))
    
  }

  useEffect(()=>{
  generateNowPlaying();
  },[])
}

export default useNowPlaying
