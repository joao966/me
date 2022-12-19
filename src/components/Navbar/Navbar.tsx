import { useContext, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { Context } from 'src/context';
import styled from '@emotion/styled';

interface IUserGithub {
  name: string;
  avatar_url: string;
}

const ButtonDark = styled(Button)(({ theme }: any) => ({
  [theme.breakpoints.down('md')]: {
    width: '100%'
  },
}));

const NavbarHorizontal = ({ pages }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [userGithub, setUserGithub] = useState<IUserGithub>();
  const { setToogleDark, toogleDark } = useContext(Context);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  useEffect(() => {
    async function fetchGithub() {
      const response = await fetch(`https://api.github.com/users/joao966`);
      const response_1 = await response.json();
      setUserGithub(response_1);
    }
    fetchGithub();
  }, []);

  return (
    <AppBar component="nav">
      <Toolbar>
        <Avatar
          alt="Remy Sharp"
          src={userGithub?.avatar_url}
          sx={{
            width: 50,
            height: 50,
            display: { md: 'flex', xs: 'none' },
          }}
          />

        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            ml: 1,
            display: { xs: 'none', md: 'flex' },
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {userGithub?.name}
        </Typography>

        <Box sx={{ justifyContent: 'end', display: { xs: 'flex', md: 'flex' } }}>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page?.text} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page?.text}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        

        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 0,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {userGithub?.name}
        </Typography>

        <Box
          sx={{ flexGrow: 1, mr: 2, justifyContent: 'end', display: { xs: 'none', md: 'flex' } }}
        >
          {pages.map((page) => (
            <Button
              key={page?.text}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: !toogleDark ? 'black' : 'white', display: 'block' }}
              href={page?.href}
            >
              {page?.text}
            </Button>
          ))}
        </Box>

        <ButtonDark
          onClick={() => setToogleDark(old => !old)}
          sx={{
            color: !toogleDark ? 'black' : 'white',
            display: { xs: 'flex', md: 'block', justifyContent: 'start' },
          }}
        >
          <SettingsBrightnessIcon />
        </ButtonDark>

        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default NavbarHorizontal;
