import React from "react";
import VideoBackground from "./VideoBackground";
import { useDispatch, useSelector } from "react-redux";
import { toggleMoviePopup } from "../utils/Redux/movieSlice";
import useTrailerVideo from "../utils/Hooks/useTrailerVideo";
import usePopupVideo from "../utils/Hooks/usePopupVideo";

const MoviePopup = () => {
  const movieId = useSelector((store) => store.movies.moviePopup.movieId);
  usePopupVideo(movieId);
  const trailer = useSelector((store) => store.movies.popupTrailer);
  const dispatch = useDispatch();

  return (
    trailer?(
      <div>
        <iframe
          className="w-full aspect-video"
          frameBorder="0"
          src={
            "https://www.youtube.com/embed/" +
            trailer?.key +
            "?autoplay=1&rel=0&modestbranding=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="flex pt-4 absolute top-48 left-5">
          <button className="bg-white text-black rounded-md px-6 py-2 hover:bg-opacity-80 mr-2">
            Play
          </button>
          <button className="bg-gray-500 text-white rounded-md px-6 py-2 bg-opacity-60 hover:bg-opacity-20">
            More Info
          </button>
        </div>
        <button
          className="bg-black border border-white absolute top-2 px-6 rounded-sm right-2 bg-opacity-80"
          onClick={() => {
            dispatch(toggleMoviePopup({ isPopup: false, id: null }));
          }}
        >
          close
        </button>
      </div>
    ):<div className="bg-gray-800 text-white aspect-video text-center"> <h1 className="absolute left-48 top-1/2">Trailer not available</h1> 
     <button
          className="bg-black border border-white absolute top-2 px-6 rounded-sm right-2 bg-opacity-80"
          onClick={() => {
            dispatch(toggleMoviePopup({ isPopup: false, id: null }));
          }}
        >
          close
        </button>
    </div>
  );
};

export default MoviePopup;
