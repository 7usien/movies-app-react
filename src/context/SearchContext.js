import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
 const [searchInput, setSearchInput] = useState('batman');

 const sharedValues = { searchInput, setSearchInput };

 return (
  <SearchContext.Provider value={sharedValues}>
   {children}
  </SearchContext.Provider>
 );
};
