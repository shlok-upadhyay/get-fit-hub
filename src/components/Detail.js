import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack, Button, Tooltip } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const [details, setDetails] = useState();

  const { bodyPart, gifUrl, name, target, equipment, instructions } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
      alt: 'Body Part',
    },
    {
      icon: TargetImage,
      name: target,
      alt: 'Target',
    },
    {
      icon: EquipmentImage,
      name: equipment,
      alt: 'Equipment',
    },
  ];

  useEffect(() => {
    setDetails(true);
  }, [exerciseDetail]);

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: { lg: 'center' } }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '30px' } }}>
        <Typography variant="h3" textTransform="capitalize">
          {name}
        </Typography>
        <Button
          variant="contained"
          color="error"
          sx={{ backgroundColor: '#FF2625', padding: '10px', width: '150px', height: '55px' }}
          onClick={() => setDetails(!details)}
        >
          { (details) ? 'Show Steps' : 'Show Details' }
        </Button>
        {(details) ? (
          <Box>
            <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C" mb="20px">
              Exercises keep you strong. The {name} bup is one
              of the best exercises to target your {target}. It will help you improve your mood and gain energy.
            </Typography>
            {extraDetail.map((item) => (
              <Stack key={item.alt} direction="row" gap="24px" alignItems="center">
                <Tooltip title={item.alt} arrow>
                  <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                    <img src={item.icon} alt={`${item.alt} icon`} style={{ width: '50px', height: '50px' }} />
                  </Button>
                </Tooltip>
                <Typography variant="h5" textTransform="capitalize">
                  {item.name}
                </Typography>
              </Stack>
            ))}
          </Box>
        ) : (
          <Box>
            {instructions?.map((item, index) => (
              <Typography
                key={index}
                sx={{ fontSize: { lg: '24px', xs: '18px' } }}
                color="#4F4C4C"
                pb="20px"
              >
                Step-{index + 1}: {item}
              </Typography>
            ))}
          </Box>
        )}
      </Stack>
    </Stack>
  );
};

export default Detail;
