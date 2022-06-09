import { Grid, Typography } from '@mui/material';
import React, { Component } from 'react';
import NavTabs from './NavTabs';

export default class Home extends Component {
  render() {
    return (
      <>
        <NavTabs />
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          direction='row'
          minHeight='70vh'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item lg={4} md={4} sm={4} xs={4} sx={{ textAlign: 'center' }}>
            <Typography>Home</Typography>
          </Grid>
        </Grid>
      </>
    );
  }
}
