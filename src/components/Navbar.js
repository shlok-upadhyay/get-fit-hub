import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="none"
    sx={{ gap: { sm: '122px', xs: '30px' }, mt: { sm: '32px', xs: '22px' }, px: { sm: '20px', xs: '15px' } }}
    className="navbar"
  >
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0 20px' }} />
    </Link>
    <Stack
      direction="row"
      sx={{ gap: { lg: '40px', xs: '30px' } }}
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <HashLink to="../#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</HashLink>
    </Stack>
  </Stack>
);

export default Navbar;
