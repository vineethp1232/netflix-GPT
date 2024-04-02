import React from 'react'
import Header from './Header'
import useNowPlaying from '../utils/Hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopular from '../utils/Hooks/usePopular';
import useTopRated from '../utils/Hooks/useTopRated';
import useUpcoming from '../utils/Hooks/useUpcoming';
import { useSelector } from 'react-redux';
import Gpt from './Gpt';
import SearchResults from './SearchResults';
import MoviePopup from './MoviePopUp';

const Browse = () => {
  useNowPlaying();
  usePopular();
  useTopRated();
  useUpcoming();
  const isGpt=useSelector(store=>store.config.isGptSearch)
  const search=useSelector(store=>store.movies.searchText)
  const moviePopup=useSelector(store=>store.movies.moviePopup.isPopup)
  return (
    <div>
      <Header/>
      {isGpt?<Gpt/>:search?<SearchResults/>:
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>}
      {moviePopup && <div className='w-[40%] aspect-video fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-50 text-white'><MoviePopup/></div>}
      
    </div>
  )
}

export default Browse
