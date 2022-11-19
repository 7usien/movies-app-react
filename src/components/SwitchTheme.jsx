import React from 'react';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';

const SwitchTheme = ({ toggleTheme }) => {
 return (
  <>
   <FormGroup sx={{ padding: '2rem 0 1rem' }}>
    <FormControlLabel
     control={<Switch onChange={toggleTheme} />}
     label='Theme mode'
    />
   </FormGroup>
  </>
 );
};

export default SwitchTheme;
