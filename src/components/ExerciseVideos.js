import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (exerciseVideos.length) {
    return (
      <Box sx={{ mt: { lg: '100px', xs: '50px' } }} p="20px">
        <Typography variant="h3" mb="40px">
          Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
        </Typography>
        <Stack
          justifyContent="center"
          flexWrap="wrap"
          alignItems="center"
          sx={{
            flexDirection: { lg: 'row' },
            columnGap: { lg: '110px', xs: '0' },
          }}
        >
          {exerciseVideos?.slice(0, 3).map((item, index) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
              style={{ marginBottom: '20px' }}
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography variant="h5" color="#000">
                  {`${item.video.title.slice(0, 47)}...`}
                </Typography>
                <Typography variant="h6" color="#000" fontSize="15px">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))}
        </Stack>
      </Box>
    );
  }
  return <Loader />;
};

export default ExerciseVideos;
