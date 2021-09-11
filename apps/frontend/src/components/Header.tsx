import {Typography, Grid} from '@material-ui/core';
import React from 'react';

const Header = () => {
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h3">youshow</Typography>
      </Grid>
      <Grid item>
        <Typography>search</Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
