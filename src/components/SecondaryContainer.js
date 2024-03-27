import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const nowPlaying=useSelector(store=>store.movies.nowPlaying)
  return (
    <div>
      <MovieList movies={nowPlaying} title={"Now Playing"}/>
    </div>
  )
}

export default SecondaryContainer
