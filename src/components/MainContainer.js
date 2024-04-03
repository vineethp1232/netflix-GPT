import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    const movies=useSelector(store=>store.movies?.nowPlaying)
    if(!movies) return;
    const mainMovie=movies[15];
const {original_title,overview,id}=mainMovie
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <div className='w-screen aspect-video'>
      <VideoBackground id={id} trailerVideo={trailerVideo}/>
      </div>
    </div>
  )
}

export default MainContainer
