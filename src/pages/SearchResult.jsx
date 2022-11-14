import React from 'react';
import { movieListDb } from '../data/db';
import MovieCard from './../components/MovieCard';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SearchResult = () => {
 const { shadows, palette } = useTheme();

 return (
  <>
   <Grid container spacing={2}>
    {movieListDb.Search.map((movie) => (
     <Grid item key={movie.imdbID} xs={12} sm={6} md={3}>
      <MovieCard movieInfo={movie} />
     </Grid>
    ))}
   </Grid>
  </>
 );
};

export default SearchResult;
