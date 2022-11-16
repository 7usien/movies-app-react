import { Box } from '@mui/system';
import { SearchContextProvider } from '../context/SearchContext';
import SearchResult from './SearchResult';

const IndexList = () => {
 return (
  <>
   <SearchContextProvider>
    <SearchResult />
   </SearchContextProvider>
  </>
 );
};

export default IndexList;
