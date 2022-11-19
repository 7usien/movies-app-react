import { Box, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import SwitchTheme from '../components/SwitchTheme';
import { FavContextProvider } from '../context/FavContext';
import { SearchContextProvider } from '../context/SearchContext';
import { darkTheme, lightTheme } from '../theme/theme';
import Header from './../components/Header';

const RootLayout = () => {
 const [isDarkMode, setIsDarkMode] = useState(false);
 const toggleHandler = () => {
  setIsDarkMode(!isDarkMode);
 };

 return (
  <SearchContextProvider>
   <FavContextProvider>
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
     <Header />

     <Box
      sx={{ backgroundColor: 'background.body', color: 'text.color' }}
      minHeight='100vh'
     >
      <Container>
       <SwitchTheme toggleTheme={toggleHandler} />

       <section className='content'>
        <Outlet />
       </section>
      </Container>
     </Box>
     <Footer />
    </ThemeProvider>
   </FavContextProvider>
  </SearchContextProvider>
 );
};

export default RootLayout;
