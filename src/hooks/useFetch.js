import { useState, useEffect, useContext } from 'react';
import { SearchContext } from './../context/SearchContext';

const useFetch = (query, movieId) => {
 const [movieListDb, setMovieListDb] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState('');

 const { searchInput, setSearchInput } = useContext(SearchContext);

 const fecthData = async () => {
  try {
   setLoading(true);
   setError('');
   const res = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&${query}`
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
   console.log(error.message);
  }
 };
 useEffect(() => {
  const timer = setTimeout(() => {
   fecthData();
  }, 1500);

  return () => {
   clearTimeout(timer);
  };
 }, [searchInput]);

 return { movieListDb, loading, error };
};

export default useFetch;
