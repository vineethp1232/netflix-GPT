import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import MoviePopup from './MoviePopUp'


const SecondaryContainer = () => {
    const nowPlaying=useSelector(store=>store.movies.nowPlaying)
    const popular=useSelector(store=>store.movies.popular)
    const topRated=useSelector(store=>store.movies.topRated)
    const upcoming=useSelector(store=>store.movies.upcoming)
    
  return (
    <div className='bg-black text-white'>
    <div className='-mt-64 relative z-20'>
     
      <MovieList movies={nowPlaying} title={"Now Playing"}/>
     <MovieList movies={topRated} title={"Top Rated"}/>
      <MovieList movies={popular} title={"Popular"}/>
      <MovieList movies={upcoming} title={"Upcoming"}/>
      
    </div>
   
    </div>
  )
}

export default SecondaryContainer
