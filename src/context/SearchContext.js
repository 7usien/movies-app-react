import React, { createContext, useState } from 'react';

// creating context
export const SearchContext = createContext();

// search context provider
export const SearchContextProvider = ({ children }) => {
 const [searchInput, setSearchInput] = useState('');
 const [movieListDb, setMovieListDb] = useState([]);

 //props shared
 const sharedValues = {
  searchInput,
  setSearchInput,

  movieListDb,
  setMovieListDb,
 };
 return (
  <SearchContext.Provider value={sharedValues}>
   {children}
  </SearchContext.Provider>
 );
};
