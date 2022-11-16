import React, { createContext, useState } from 'react';

// creating context
export const SearchContext = createContext();

// search context provider
export const SearchContextProvider = ({ children }) => {
 const [searchInput, setSearchInput] = useState('batman');

 //props shared
 const sharedValues = { searchInput, setSearchInput };

 return (
  <SearchContext.Provider value={sharedValues}>
   {children}
  </SearchContext.Provider>
 );
};
