import React from 'react'
import { MOVIE_POSTER_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { toggleMoviePopup } from '../utils/Redux/movieSlice'

const MovieCard = ({movie}) => {

  const dispatch=useDispatch()
  
  return (
   movie.poster_path && <div className='w-32 md:w-52 px-2 flex-none mx-1 cursor-pointer hover:translate-x-2 hover:-translate-y-2' onClick={()=>dispatch(toggleMoviePopup({id:movie.id,isPopup:true}))}>
      <img className="h-40 md:h-60 w-full" alt={movie?.original_title} src={MOVIE_POSTER_URL+movie.poster_path}/>
    </div>
  )
}

export default MovieCard
