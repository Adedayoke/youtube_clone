import React from 'react';
import { Stack, Box } from '@mui/material';
import {VideoCard, ChannelCard} from './';

const Videos = ({videos, direction, isLoading}) => {
  if (!videos?.length) return 'Loading...'
  return (
    <Stack direction={direction || 'row'} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx)=>(
        <Box key={idx}>
          {item.id.videoId && <VideoCard isLoading={isLoading} video={item} />}
          {item.id.channelId && <ChannelCard isLoading={isLoading} channelDetail={item} />}
        </Box>
      )
      )}
    </Stack>
  )
}

export default Videos