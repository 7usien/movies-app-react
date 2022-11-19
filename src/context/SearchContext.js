import React, { createContext, useState } from 'react';

// creating context
export const SearchContext = createContext();

// search context provider
export const SearchContextProvider = ({ children }) => {
 const [searchInput, setSearchInput] = useState('');
 const [favicon, setFavicon] = useState({ id: null, isFav: false });
 const [movieListDb, setMovieListDb] = useState([]);

 //props shared
 const sharedValues = {
  searchInput,
  setSearchInput,
  favicon,
  setFavicon,
  movieListDb,
  setMovieListDb,
 };

 return (
  <SearchContext.Provider value={sharedValues}>
   {children}
  </SearchContext.Provider>
 );
};
