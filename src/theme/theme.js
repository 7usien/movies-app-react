import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
 palette: {
  mode: 'light',
  background: {
   header: '#0f171e',
   body: '#fff',
  },
 },
});

export const DarkTheme = createTheme({
 palette: {
  mode: 'dark',
  background: {
   header: '#0f171e',
   body: '#1a242f',
  },
 },
});
