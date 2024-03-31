import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '60px', xs: '30px' }, p: '20px' }}>
    <Typography variant="h3" mb={4}>
      Similar <span style={{ color: '#FF2625' }}>Target Muscle</span> Exercises
    </Typography>
    <Stack direction="row" mb="40px" sx={{ p: '2', position: 'relative' }}>
      {targetMuscleExercises.length ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
    <Typography variant="h3" mb={4} mt={12}>
      Similar <span style={{ color: '#FF2625' }}>Equipment</span> Exercises
    </Typography>
    <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
      {equipmentExercises.length ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;
