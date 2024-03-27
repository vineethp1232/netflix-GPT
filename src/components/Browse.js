import React from 'react'
import Header from './Header'
import useNowPlaying from '../utils/Hooks/useNowPlaying'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlaying();
  return (
    <div>
      <Header/>
     <MainContainer/>
     <SecondaryContainer/>
      
    </div>
  )
}

export default Browse
