import { useState, useEffect, useContext } from 'react';
import { SearchContext } from './../context/SearchContext';
import { useParams } from 'react-router-dom';

const useFetch = (query, movieId) => {
 const { movieListDb, setMovieListDb } = useContext(SearchContext);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState('');

 const { searchInput, setSearchInput } = useContext(SearchContext);

 const fecthData = async () => {
  try {
   setLoading(true);
   setError('');
   const res = await fetch(
    `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&${query}`
   );

   const data = await res.json();
   setLoading(false);
   if (data.Response === 'True') {
    return setMovieListDb(data);
   } else {
    setLoading(false);
    setError(data.Error);
   }
  } catch (error) {}
 };

 const { id } = useParams();

 useEffect(() => {
  if (searchInput || id) {
   const timer = setTimeout(() => {
    fecthData();
   }, 500);

   return () => {
    clearTimeout(timer);
   };
  }
 }, [searchInput]);

 return { movieListDb, loading, error };
};

export default useFetch;
