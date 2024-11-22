import React from 'react';
import { Box } from '@mui/material';

const ImageComponent = ({ src, alt }) => {
  return (
    <Box
      sx={{
        maxWidth: '628px',
        height: '308px',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '8px',
        margin: '3px',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          borderRadius: '8px',
        }}
      />
    </Box>
  );
};

export default ImageComponent;