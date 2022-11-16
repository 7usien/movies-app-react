import React, { useEffect, useState, useContext } from 'react';
import MovieCard from './../components/MovieCard';
import { Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchBar from './home/SearchBar';
import Loading from '../components/Loading';
import useFetch from './../hooks/useFetch';
import { SearchContextProvider } from '../context/SearchContext';
import { SearchContext } from './../context/SearchContext';

const SearchResult = () => {
 const { shadows, palette } = useTheme();
 const { searchInput, setSearchInput } = useContext(SearchContext);

 const [movieList, setMovieList] = useState({});

 const { loading, error, movieListDb } = useFetch(`S=${searchInput}`);

 useEffect(() => {
  setMovieList(movieListDb);
 }, []);


 return (
  <>
   <SearchContextProvider>
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
   </SearchContextProvider>
  </>
 );
};

export default SearchResult;
