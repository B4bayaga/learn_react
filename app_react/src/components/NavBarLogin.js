import * as React from 'react';
import '../App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from './LogoAzul';


const pages = ['Home', 'Contratar'];

function NavBarLogin() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ background: '#FAFAFF'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, mr: 1 }}>
              <Logo />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'PT Sans',
              fontSize: 28,
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              letterSpacing: '-1.4px',
              color: '#0057FF',
              textDecoration: 'none',
            }}
          >
            toparado.blog
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color='#0057FF'
            >
              <MenuIcon />
            </IconButton>
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' }, mr: 1, marginRight: 0.3}}>
              <Logo height={28}/>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { sm: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'PT Sans',
              fontSize: 26,
              fontWeight: 700,
              lineHeight: 'normal',
              letterSpacing: '-1.4px',
              color: '#0057FF',
              textDecoration: 'none',
            }}
          >
            toparado.blog
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ mt: 0.5, color: '#102B5E', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box >
            <Button variant="contained" size='medium' href="/login"
            sx={{
                display: { xs: 'none', md: 'flex' },
                backgroundColor: '#004FFA',
                '&:hover': {
                  backgroundColor: '#0037CC', // Cor ao passar o mouse (opcional)
                },
            }}>
            Login
            </Button>
            <Button variant="contained" size='small' href="/login"
            sx={{
                display: { xs: 'flex', md: 'none' },
                backgroundColor: '#004FFA',
                '&:hover': {
                  backgroundColor: '#0037CC', // Cor ao passar o mouse (opcional)
                },
            }}>
                Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBarLogin;