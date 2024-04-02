import  { useEffect } from 'react'
import { API_OPTIONS } from '../constants'
import { useDispatch } from 'react-redux'
import { addPopular} from '../Redux/movieSlice'

const usePopular = () => {
    const dispatch=useDispatch()

  const generatePopular=async ()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
    const res=await data.json()
    console.log(res)
    dispatch(addPopular(res.results))
    
  }

  useEffect(()=>{
  generatePopular();
  },[])
}

export default usePopular;
