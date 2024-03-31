import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  const handleScroll = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <Link to={`/exercise/${exercise.id}`} onClick={handleScroll} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button sx={{ ml: '21px', color: '#FFF', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ ml: '21px', color: '#FFF', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml="21px" color="#000" fontWeight="bold" mt="15px" py="10px" textTransform="capitalize" fontSize="22px">
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
