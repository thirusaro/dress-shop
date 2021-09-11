import React from 'react';
import type {AppProps} from 'next/app';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from '../styles/theme';
import {CssBaseline} from '@material-ui/core';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
