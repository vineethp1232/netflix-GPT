import React, { useEffect } from 'react'
import { API_OPTIONS } from '../constants'
import { useDispatch } from 'react-redux'
import { addTopRated } from '../Redux/movieSlice'

const useTopRated = () => {
    const dispatch=useDispatch()
  const generateTopRated= async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS)
    const res= await data.json()
dispatch(addTopRated(res.results))

  }
  useEffect(()=>{
    generateTopRated();
  },[])
}

export default useTopRated
