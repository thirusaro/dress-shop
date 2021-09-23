import { Typography, Grid } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import logo from '../images/logo.png';
import { makeStyles } from '@mui/material';

const Header = () => {

  return (
    <div>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <Grid container sx={{ mx: 12, mt: 4 }}>
        <Grid item>
          <Image src={logo} width={175} height={45} />
        </Grid>
        <Grid item>
          <Typography>search</Typography>
        </Grid>
      </Grid>
    </div >
  );
};

export default Header;
