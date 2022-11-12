import { Avatar, Box, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.module.css';
import avatar from '../images/avatar.png';

const Header = () => {
 return (
  <Box component='header' id='header'>
   <Container>
    <Grid container justifyContent='space-between' alignItems='center'>
     <Grid item>
      <Link to='/'>
       <Typography component='p' variant='h4'>
        Movie APP
       </Typography>
      </Link>
     </Grid>
     <Grid item>
      <Avatar src={avatar} alt='avtar' />
     </Grid>
    </Grid>
   </Container>
  </Box>
 );
};

export default Header;
