import { Card, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
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

 console.log(error, loading);

 return (
  <>
   {movieListDb && (
    <Loading errorState={error} loadingState={loading}>
     <Grid container>
      <Grid item>
       <Card>
        <CardMedia image={Poster} component='img'></CardMedia>
       </Card>
      </Grid>
      <Grid item>
       <Box>
        <Typography>title: {Title}</Typography>
        <Typography>type : {Genre}</Typography>
       </Box>
      </Grid>
     </Grid>
    </Loading>
   )}
  </>
 );
};

export default Details;
