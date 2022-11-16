import { Box } from '@mui/material';
import { useContext } from 'react';
import { SearchContext } from './../context/SearchContext';

const SearchBar = () => {
 const { searchInput, setSearchInput } = useContext(SearchContext);

 return (
  <Box mb='2rem'>
   <SearchBar
    searchInput={searchInput}
    setSearchInput={setSearchInput}
    value={searchInput}
   />
  </Box>
 );
};

export default SearchBar;
