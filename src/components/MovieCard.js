import React from 'react'
import { MOVIE_POSTER_URL } from '../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <div>
      <img alt={movie?.original_title} src={MOVIE_POSTER_URL+movie.poster_path}/>
    </div>
  )
}

export default MovieCard
