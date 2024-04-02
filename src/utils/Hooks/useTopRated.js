import React, { useEffect } from 'react'
import { API_OPTIONS } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRated } from '../Redux/movieSlice'

const useTopRated = () => {
    const dispatch=useDispatch()
    const topRatedMovies=useSelector(store=>store.movies.topRated)
  const generateTopRated= async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS)
    const res= await data.json()
dispatch(addTopRated(res.results))

  }
  useEffect(()=>{
   !topRatedMovies && generateTopRated();
  },[])
}

export default useTopRated
