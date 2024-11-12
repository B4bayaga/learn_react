import React from 'react';
import LogoImage from '../assets/logo_azul.png';

const Logo = ({  height = 35 }) => {

  return (
    <img
      src={LogoImage}
      alt="Logo"
      style={{
        height: `${height}px`,
        width: 'auto',
        marginRight: '8px',
      }}
    />
  );
};

export default Logo;