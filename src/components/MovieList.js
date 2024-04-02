import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <div className="pl-4 my-2">
      <h1 className="pl-2 py-2 text-xl">{title}</h1>
      <div className="flex overflow-x-auto scroll-hide ">
        
          {movies &&
            movies.map((movie) => <MovieCard  key={movie.id} movie={movie} />)}
        
      </div>
    </div>
  );
};

export default MovieList;
