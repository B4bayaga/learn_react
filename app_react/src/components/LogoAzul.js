import React from 'react';
import LogoImage from '../assets/logo_azul.png';

const Logo = () => {
  return (
    <img
      src={LogoImage}
      alt="Logo"
      style={{
        height: '35px',
        width: 'auto',
        marginRight: '8px',
      }}
    />
  );
};

export default Logo;