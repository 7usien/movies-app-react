import React, { useEffect, useState } from 'react';
import MovieCard from './../components/MovieCard';
import { Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchBar from './home/SearchBar';
import Loading from '../components/Loading';

const SearchResult = () => {
 const { shadows, palette } = useTheme();
 const [searchInput, setSearchInput] = useState('batman');
 const [movieListDb, setMovieListDb] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState('');

 useEffect(() => {
  let debounceTimer;
  const fecthData = async () => {
   try {
    setLoading(true);
    setError('');
    const res = await fetch(
     `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchInput}`
    );
    const data = await res.json();
    setLoading(false);
    if (data.Response === 'True') {
     return setMovieListDb(data);
    } else {
     setLoading(false);
     setError(data.Error);
     throw new Error(data.Error);
    }
   } catch (error) {
    // console.log(error.message);
   }
  };

  if (!searchInput) {
   fecthData();
  } else {
   debounceTimer = setTimeout(() => {
    fecthData();
   }, 3000);
  }
  return () => {
   clearTimeout(debounceTimer);
  };
 }, [searchInput]);

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
  </>
 );
};

export default SearchResult;
