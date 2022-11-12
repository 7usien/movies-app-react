import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
 return (
  <>
   <MovieCard data={movies}></MovieCard>
  </>
 );
};

export default MovieList;
