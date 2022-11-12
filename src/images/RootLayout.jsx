import { ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import SwitchTheme from '../components/SwitchTheme';
import SearchBar from '../pages/home/SearchBar';
import { DarkTheme, LightTheme } from '../theme/theme';
import Header from './../components/Header';

const RootLayout = () => {
 return (
  <>
   <ThemeProvider theme={DarkTheme}>
    <Header />

    <Container sx={{ backgroundColor: 'Background.body' }}>
     <SwitchTheme />
     <SearchBar />

     <section className='content'>
      <Outlet />
     </section>
    </Container>
    <Footer />
   </ThemeProvider>
  </>
 );
};

export default RootLayout;
