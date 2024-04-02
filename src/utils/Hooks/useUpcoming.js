import React, { useEffect } from 'react'
import { API_OPTIONS } from '../constants'
import { useDispatch } from 'react-redux'
import { addUpcoming } from '../Redux/movieSlice'

const useUpcoming = () => {
    const dispatch=useDispatch()
  const generateUpcoming=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS)
    const res=await data.json()
    dispatch(addUpcoming(res.results))
  }
  useEffect(()=>{
    generateUpcoming();
},[])
}


export default useUpcoming
