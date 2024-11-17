import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Twitter, LinkedIn } from '@mui/icons-material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      {/* Ícones de Redes Sociais */}
      <Box sx={{
        backgroundColor: '#004FFA',
        color: '#fff',
        padding: '48px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
        <IconButton color="inherit" href="https://facebook.com" target="_blank" aria-label="Facebook">
          <FacebookOutlinedIcon fontSize='large' />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com" target="_blank" aria-label="Twitter">
          <Twitter fontSize='large' />
        </IconButton>
        <IconButton color="inherit" href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <LinkedIn fontSize='large' />
        </IconButton>
      </Box>
        {/* Copyright */}
      <Typography variant="body2" align="center"
      sx={{
        backgroundColor: '#003AB9',
        color: '#fff',
        fontFamily: "PT Sans",
        fontSize: 18,
        fontStyle:'normal',
        lineHeight: 'normal',
        fontWeight: 400,
        padding: '18px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        '@media (max-width: 440px)': {
          fontSize: 12,
        },
        }}>
        &copy; 2024 toparado.blog. Todos os direitos reservados.
      </Typography>
    </Box>
  );
}

export default Footer;
