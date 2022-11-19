import { Typography, Box } from '@mui/material';
import React from 'react';

const MovieItem = ({ title, content, icon }) => {
 return (
  <Box my={2}>
   <Typography color='grey.500' variant='body1' component='p'>
    {icon ? icon : ''}
    {title}
   </Typography>
   {typeof content === 'string' ? (
    <Typography sx={{ marginLeft: '1.2rem' }} variant='h6' component='div'>
     {content}
    </Typography>
   ) : (
    content
   )}
  </Box>
 );
};

export default MovieItem;
