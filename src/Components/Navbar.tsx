import React, { Component } from 'react';
import { AppBar, Container, Toolbar, Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import { withRouter } from '../RouterHOC/withRoute';

interface onjType {
  pages: { id: string; name: string; link: string };
}

const pages = [
  { id: '0', name: 'Demo1', link: 'demo1' },
  { id: '1', name: 'Demo2', link: 'demo2' },
];

const objPages: onjType['pages'][] = [];
for (const key in pages) {
  objPages.push({
    id: `${key}`,
    name: pages[key].name,
    link: pages[key].link,
  });
}

interface props {
  location: Location;
}
class Navbar extends Component<props> {
  render() {
    const { location } = this.props;
    return (
      <AppBar
        position='static'
        sx={{
          backgroundColor: 'white',
          boxShadow: '2px 2px 30px 2px #d4e6f4',
        }}
      >
        <Container maxWidth='lg'>
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Tabs
                value={location.pathname}
                TabIndicatorProps={{
                  style: {
                    margin: 5,
                  },
                }}
                textColor='primary'
                sx={{ my: 2 }}
              >
                {objPages.map((page) => (
                  <Tab
                    value={`${page.link}`}
                    label={`${page.name}`}
                    component={Link}
                    to={`${page.link}`}
                    key={page.id}
                    sx={{ color: 'black', mx: 5 }}
                  />
                ))}
              </Tabs>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}

export default withRouter(Navbar);
