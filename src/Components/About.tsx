import { Grid, Typography } from '@mui/material';
import React, { Component } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <>
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          direction='row'
          justifyContent='center'
        >
          <Grid
            item
            lg={4}
            md={4}
            sm={4}
            xs={4}
            sx={{ textAlign: 'center', my: 5 }}
          >
            <Typography>About</Typography>
          </Grid>
          <Navbar />
          <Outlet />
        </Grid>
      </>
    );
  }
}
