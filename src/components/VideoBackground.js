import React from "react";
import useTrailerVideo from "../utils/Hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  useTrailerVideo(id);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  return (
    <div className="w-screen">
    
    <iframe
    className="w-screen aspect-video"

    frameBorder="0"
    src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&rel=0&modestbranding=1"}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    
  ></iframe>
  </div>
  
  
  
    
  );
};

export default VideoBackground;
