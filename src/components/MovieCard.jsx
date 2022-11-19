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
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movieInfo }) => {
 const { Title, Year, imdbID, Type, Poster } = movieInfo;
 const navigate = useNavigate();
 const cardHandler = () => {
  setTimeout(() => navigate(`/${imdbID}/movie`), 500);
 };

 return (
  <>
   <CardActionArea className='card' onClick={cardHandler}>
    <Card
     sx={{
      position: 'relative',
      borderRadius: '1rem',
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
