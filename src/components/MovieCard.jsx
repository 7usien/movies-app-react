import './moviecard.css';
import {
 Card,
 CardActionArea,
 CardContent,
 CardMedia,
 Typography,
 useTheme,
} from '@mui/material';
import React from 'react';
import shadows from '@mui/material/styles/shadows';
const MovieCard = ({ movieInfo }) => {
 const { Title, Year, imdbID, Type, Poster } = movieInfo;

 return (
  <>
   <CardActionArea className='card'>
    <Card
     sx={{
      position: 'relative',
      ':hover': {
       boxShadow: shadows[6],
      },
     }}
    >
     <CardMedia
      sx={{
       width: '100%',
      }}
      image={Poster}
      component='img'
     />
     <CardContent
      className='card-content'
      sx={{
       position: 'absolute',
       width: '100%',
       bottom: '0',
       left: '0',
       zIndex: '1',

       backgroundColor: 'cardContent.background',
      }}
     >
      <Typography>Title: {Title}</Typography>
      <Typography>year : {Year}</Typography>
      <Typography>type : {Type}</Typography>
     </CardContent>
    </Card>
   </CardActionArea>
  </>
 );
};

export default MovieCard;
