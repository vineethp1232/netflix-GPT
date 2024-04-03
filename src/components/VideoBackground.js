import React from "react";
import useTrailerVideo from "../utils/Hooks/useTrailerVideo";


const VideoBackground = ({ id ,trailerVideo}) => {
  useTrailerVideo(id);
  return (
    <iframe className="w-full aspect-video"
     frameBorder="0"
    src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&rel=0&modestbranding=1"}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    

    
  ></iframe>
  
  
  
  
    
  );
};

export default VideoBackground;
