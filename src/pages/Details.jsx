//React
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

// compo
import Loading from '../components/Loading';
import useFetch from './../hooks/useFetch';
import MovieItem from '../components/MovieItem';

// MUI
import { Card, CardMedia, Grid, Rating } from '@mui/material';

import Fab from '@mui/material/Fab';
import { Box } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import LanguageIcon from '@mui/icons-material/Language';
import StarIcon from '@mui/icons-material/Star';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PublicIcon from '@mui/icons-material/Public';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { FavContext } from '../context/FavContext';

const Details = () => {
 const { id } = useParams();
 const { favList, setFavList } = useContext(FavContext);
 const [isFav, setIsFav] = useState(false);
 const { loading, error, movieListDb } = useFetch(`i=${id}`);

 const {
  Title,
  imdbID,
  Language,
  Runtime,
  Actors,
  BoxOffice,
  Country,
  Plot,
  Poster,
  Released,
  imdbRating,
  Rated,
  Type,
 } = movieListDb;

 const faviHandler = (eleId) => {
  const isFound = favList.some((ele) => ele.id === eleId);

  if (isFound) {
   setIsFav(false);
   setFavList((prev) => prev.filter((ele) => ele.id !== eleId));
  } else {
   setIsFav(true);
   setFavList((prev) => [...prev, { id: eleId, isFav: true }]);
  }
 };

 useEffect(() => {
  const found = favList.some((item) => item.id === id);
  if (found) {
   setIsFav(true);
  }
 }, [id, favList]);

 return (
  <>
   {movieListDb && (
    <Loading errorState={error} loadingState={loading}>
     <Grid
      container
      spacing={3}
      columns={12}
      justifyContent='center'
      alignItems='start'
     >
      <Grid item md={4}>
       <Card sx={{ position: 'relative' }}>
        <Fab
         color='info'
         aria-label='add'
         sx={{
          position: 'absolute',
          top: '1.5rem',
          left: '1.5rem',
          display: 'block',
         }}
        >
         {isFav ? (
          <FavoriteIcon
           onClick={() => {
            faviHandler(imdbID);
           }}
          />
         ) : (
          <FavoriteBorderIcon
           onClick={() => {
            faviHandler(imdbID);
           }}
          />
         )}
        </Fab>
        <CardMedia image={Poster} component='img'></CardMedia>
       </Card>
      </Grid>

      <Grid item md={8}>
       <Box>
        <MovieItem
         title='title'
         content={Title}
         icon={<SlowMotionVideoIcon sx={{ marginRight: '5px' }} />}
        />
        <MovieItem title='About' content={Plot} />
        <MovieItem title='time' content={Runtime} icon={<AccessTimeIcon />} />
        <MovieItem
         title='Type'
         content={Type}
         icon={<LocalMoviesIcon sx={{ marginRight: '5px' }} />}
        />
        <MovieItem
         title='released'
         content={Released}
         icon={<CalendarMonthIcon sx={{ marginRight: '5px' }} />}
        />
        <MovieItem
         title='Lang'
         content={Language}
         icon={<LanguageIcon sx={{ marginRight: '5px' }} />}
        />
        <MovieItem
         title='Actors'
         content={Actors}
         icon={<GroupIcon sx={{ marginRight: '5px' }} />}
        />

        <MovieItem
         title='Profits'
         content={BoxOffice}
         icon={<LocalAtmIcon sx={{ marginRight: '5px' }} />}
        />
        <MovieItem
         title='Rating'
         content={Rated}
         icon={<StarIcon sx={{ marginRight: '5px' }} />}
        />
        <MovieItem
         title='Country'
         content={Country}
         icon={<PublicIcon sx={{ marginLeft: '5px' }} />}
        />

        <MovieItem
         title='IMDB'
         content={
          <Grid container spacing={1} alignItems='center'>
           <Grid item sx={{ marginLeft: '1rem', fontSize: '1.3rem' }}>
            {imdbRating}
           </Grid>

           <Grid item>
            <Rating
             max={10}
             value={Number(imdbRating)}
             precision={0.1}
             readOnly
            />
           </Grid>
          </Grid>
         }
        />
       </Box>
      </Grid>
     </Grid>
    </Loading>
   )}
  </>
 );
};

export default Details;
