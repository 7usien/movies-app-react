import React from 'react';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';

const SwitchTheme = () => {
 return (
  <>
   <FormGroup>
    <FormControlLabel control={<Switch defaultChecked />} label='Theme mode' />
   </FormGroup>
  </>
 );
};

export default SwitchTheme;
