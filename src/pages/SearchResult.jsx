import React, { useEffect, useState, useContext } from 'react';
import MovieCard from './../components/MovieCard';
import { Box, Grid, Typography } from '@mui/material';
import SearchBar from './home/SearchBar';
import Loading from '../components/Loading';
import useFetch from './../hooks/useFetch';
import { SearchContext } from './../context/SearchContext';
import man from '../images/img.png';

const SearchResult = () => {
 const { searchInput, setSearchInput } = useContext(SearchContext);

 const [movieList, setMovieList] = useState({});
 const { loading, error, movieListDb } = useFetch(`S=${searchInput}`);

 useEffect(() => {
  if (searchInput.length > 1) {
   setMovieList(movieListDb);
  }
 }, [searchInput, movieListDb]);

 return (
  <>
   <Box mb='2rem'>
    <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
   </Box>
   <Loading loadingState={loading} errorState={error}>
    <Grid container spacing={2} columns={12}>
     {movieListDb.Search &&
      movieListDb.Search.map((movie) => (
       <Grid item key={movie.imdbID} xs={6} sm={4} md={3}>
        <MovieCard movieInfo={movie} />
       </Grid>
      ))}
    </Grid>
   </Loading>

   {!searchInput && (
    <Grid container justifyContent='center' alignItems='center'>
     <Grid item>
      <Typography variant='h5' component='h3' textAlign='center'>
       Ops try to search for somehting new ..
      </Typography>
      <img
       style={{ display: 'block', margin: '0 auto', textAlign: 'center' }}
       src={man}
       alt=''
      />
     </Grid>
    </Grid>
   )}
  </>
 );
};

export default SearchResult;
