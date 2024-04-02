import React, { useEffect } from 'react'
import { API_OPTIONS } from '../constants'
import { useDispatch } from 'react-redux'
import { addSearchResults } from '../Redux/movieSlice'

const useSearchMovie = (search) => {
    const dispatch=useDispatch()
  const getMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+search+'&include_adult=false&language=en-US&page=1',API_OPTIONS)
    const res= await data.json();
    dispatch(addSearchResults(res.results))
 }
useEffect(()=>{
    getMovies();
},[search])
}

export default useSearchMovie
