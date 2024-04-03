import React from 'react'
import useSearchMovie from '../utils/Hooks/useSearchMovie'
import { useSelector } from 'react-redux'
import { BACKGROUND_IMG } from '../utils/constants'
import Header from './Header'
import MovieList from './MovieList'

const SearchResults = () => {
    const search=useSelector(store=>store.movies.searchText)
    useSearchMovie(search);
    const movies=useSelector(store=>store.movies.searchResults)
    
  return (
    <div>
        <div className='bg-black bg-opacity-80 text-white py-10 md:py-24 '>
         <MovieList movies={movies} title={"Results"} />
         </div>
         <img src={BACKGROUND_IMG} className='absolute -z-20 top-0 h-screen object-cover md:h-auto'></img>
    </div>
  )
}

export default SearchResults
