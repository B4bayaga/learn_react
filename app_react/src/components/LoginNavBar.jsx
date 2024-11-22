import * as React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Logo from './LogoAzul';


function LoginNavBar() {
  return (
    <AppBar position="fixed" sx={{ background: '#FAFAFF'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Box sx={{ display: { xs: 'flex' }, mr: 1 }}>
            <Link to="/">
              <Logo height={26} />
						</Link>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex' },
              fontFamily: 'PT Sans',
              fontSize: 26,
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default LoginNavBar;