import React, { PropsWithChildren } from 'react';
import { Grid } from '@mui/material';

export interface ContentProps {}

const Content = (props: PropsWithChildren<ContentProps>) => {
  return (
    <main>
      <Grid container sx={{ mx: 12 }}>
        {props.children}
      </Grid>
    </main>
  );
};

export default Content;
