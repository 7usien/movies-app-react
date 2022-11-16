import {
 Card,
 CardActions,
 CardContent,
 CardMedia,
 Grid,
 Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './../hooks/useFetch';
const Details = () => {
 const { id } = useParams();

 const { loading, error, movieListDb } = useFetch(`i=${id}`);

 const {
  Title,

  Language,
  Genre,
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

 return (
  <>
   {movieListDb && (
    <Grid container>
     <Grid item>
      <Card>
       <CardMedia src={Poster} component='img'></CardMedia>
      </Card>
     </Grid>
     <Grid item>
      <Box>
       <Typography>title: {Title}</Typography>
       <Typography>type: {Genre}</Typography>
      </Box>
     </Grid>
    </Grid>
   )}
  </>
 );
};

export default Details;
