import { Grid, Typography } from '@mui/material';
import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import NavTabs from './NavTabs';

export default class ContactUs extends Component {
  render() {
    return (
      <div>
        <NavTabs />
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
            <Typography>Contact Us</Typography>
          </Grid>
        </Grid>
        <Outlet />
      </div>
    );
  }
}
