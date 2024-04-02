import React from 'react'
import { MOVIE_POSTER_URL } from '../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <div className='w-52 px-2 flex-none mx-1' >
      <img className="h-60 w-full" alt={movie?.original_title} src={MOVIE_POSTER_URL+movie.poster_path}/>
    </div>
  )
}

export default MovieCard
