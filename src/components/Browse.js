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

const Browse = () => {
  useNowPlaying();
  usePopular();
  useTopRated();
  useUpcoming();
  const isGpt=useSelector(store=>store.config.isGptSearch)
  return (
    <div>
      <Header/>
      {isGpt?<Gpt/>: 
      <>
      <MainContainer/>
     <SecondaryContainer/>
      </>}
     
      
    </div>
  )
}

export default Browse
