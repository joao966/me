import * as React from 'react';
import NavbarHorizontal from 'src/components/Navbar';
import { configTabs } from 'src/config/navbar';
import { Welcome, Work } from 'src/sections/home';
import { Box, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Footer } from 'src/components/Footer/Footer';
import ScrollTop from 'src/components/Scroll';

const Home = (props: any) => {
  return (
    <>
      <NavbarHorizontal pages={configTabs} />
      <Welcome />
      <Box>
        <Work />
      </Box>

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      <Footer />
    </>
  );
};

export default Home;
