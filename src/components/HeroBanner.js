import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box
    sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' },
      mb: { lg: '300px', xs: '100px' } }}
    position="relative"
    p="20px"
  >
    <Typography variant="h1" color="#FF2625" fontWeight="600" fontSize="26px">
      Get-Fit Exercise Hub
    </Typography>
    <Typography
      variant="h2"
      fontWeight="700"
      sx={{ fontSize: { lg: '44px', xs: '40px' } }}
      mb="23px"
      mt="30px"
    >
      Sweat, Smile <br />
      and Repeat
    </Typography>
    <Typography variant="h3" fontSize="22px" lineHeight="35px" mb={4}>
      Check out the most effective exercises
    </Typography>
    <Button
      variant="contained"
      color="error"
      href="#exercises"
      sx={{ backgroundColor: '#FF2625', padding: '10px' }}
    >
      Explore Exercises
    </Button>
    <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
