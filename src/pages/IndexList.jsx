import { Box } from '@mui/system';
import SearchBar from './home/SearchBar';
import SearchResult from './SearchResult';

const IndexList = () => {
 return (
  <>
   <Box mb='2rem'>
    <SearchBar />
   </Box>
   <SearchResult />
  </>
 );
};

export default IndexList;
