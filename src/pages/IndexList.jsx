import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';

const IndexList = () => {
 const [fetchedData, setFetchedData] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&type=movie&s=movie`;

    const res = await fetch(url);
    const data = await res.json();

    return setFetchedData(data.Search);
   } catch (error) {
    console.log(error.message);
   }
  };
  fetchData();
 }, []);

 return (
  <>
   <MovieList movies={fetchedData} />
  </>
 );
};

export default IndexList;
