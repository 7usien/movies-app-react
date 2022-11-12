import React from 'react';

const MovieCard = ({ data: movies }) => {
 return (
  <>
   {movies && (
    <div className='card'>
     <h2>{movies.title}</h2>
    </div>
   )}
  </>
 );
};

export default MovieCard;
