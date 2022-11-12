import { TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
 return (
  <Box
   sx={{
    display: 'flex',
    alignItems: 'flex-end',
    verticalAlign: 'center',
   }}
  >
   <SearchIcon fontSize='large' sx={{ marginRight: '5px' }} />
   <TextField
    fullWidth
    id='standard-basic'
    label='search'
    variant='standard'
    placeholder='search for a movie here ..'
   />
  </Box>
 );
};

export default SearchBar;
