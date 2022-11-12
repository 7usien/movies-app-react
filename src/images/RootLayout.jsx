import { Container } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import SwitchTheme from '../components/SwitchTheme';
import Header from './../components/Header';

const RootLayout = () => {
 return (
  <>
   <Header />

   <Container>
    <SwitchTheme />

    <section className='content'>
     <Outlet />
    </section>
   </Container>
   <Footer />
  </>
 );
};

export default RootLayout;
