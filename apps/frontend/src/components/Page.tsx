import React, { PropsWithChildren } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
import Content from './Content';
import { Grid } from '@mui/material';

export interface PageProps {
  title: string;
}

const Page = (props: PropsWithChildren<PageProps>) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Grid container direction="column">
        <Header />
        <NavBar />
        <Content>{props.children}</Content>
        <Footer />
      </Grid>
    </div>
  );
};

export default Page;
