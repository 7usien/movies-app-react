import { Alert, CircularProgress, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import LoadingImg from '../images/loading.gif';

const Loading = ({ loadingState, errorState, children }) => {
 return (
  <>
   {loadingState && !errorState.length > 0 ? (
    <Grid container justifyContent='center' alignItems='center'>
     <Grid item>
      <CircularProgress />
     </Grid>
    </Grid>
   ) : errorState.length > 0 ? (
    <Alert severity='error' sx={{ textAlign: 'center' }}>
     {' '}
     {errorState}
    </Alert>
   ) : (
    children
   )}
  </>
 );
};

export default Loading;
