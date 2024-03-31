import React from 'react';
import { Stack, Typography } from '@mui/material';

import icon from '../assets/icons/gym.png';

const BodyPart = ({ item, bodyPart, setBodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      borderTop: (bodyPart === item) ? '4px solid #FF2625' : '',
      backgroundColor: '#FFF',
      borderBottomLeftRadius: '20px',
      width: '270px',
      height: '280px',
      cursor: 'pointer',
      gap: '47px',
      mr: { xs: '20px' },
      ml: { xs: '-15px' },
    }}
    onClick={() => {
      setBodyPart(item);
      document.getElementById('exercises').scrollIntoView();
    }}
  >
    <img src={icon} alt="dumbell" style={{ width: '50px', height: '50px' }} />
    <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
  </Stack>
);

export default BodyPart;
