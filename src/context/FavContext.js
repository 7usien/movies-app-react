import { createContext, useState } from 'react';

export const FavContext = createContext();

export const FavContextProvider = ({ children }) => {
 const [isFav, setIsFav] = useState(false);
 const [favList, setFavList] = useState([]);

 const sharedValues = {
  favList,
  setFavList,
 };
 return (
  <FavContext.Provider value={sharedValues}>{children}</FavContext.Provider>
 );
};
