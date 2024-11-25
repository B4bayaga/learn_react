import * as React from 'react';
import '../App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function LoginNavBar() {
  return (
    <AppBar position="fixed" sx={{ background: '#FAFAFF'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
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