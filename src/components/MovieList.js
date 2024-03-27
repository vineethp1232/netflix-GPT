import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies,title }) => {
  return (
    <div>
         <h1>{title}</h1>
    <div className='flex overflow-x-scroll'>
       
    <div className=' flex'>
      {movies && movies.map(movie => (
        
        <MovieCard key={movie.id} movie={movie} />
        
      ))}
    </div>
    </div>
    </div>
  );
};

export default MovieList;
