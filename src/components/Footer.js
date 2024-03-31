import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="100px" bgcolor="#FFF3F4">
    <Stack gap="40px" alignItems="center" px="40px" pt="30px">
      <img src={Logo} alt="logo" width="160px" height="80px" style={{ border: '2px solid #3A1212', borderRadius: '10px', padding: '5px' }} />
      <Typography variant="h5" pb="40px" mt="15px" textAlign="center">
        Made with ❤️ by Shlok Upadhyay
      </Typography>
    </Stack>
  </Box>
);

export default Footer;
