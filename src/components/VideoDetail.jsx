import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Box, Typography, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import Videos from './';
import { fetchFromApi } from '../utils/fetchFromApi';

const VideoDetail = () => {
  const {id} = useParams();
  const [videoDetail, setvideoDetail] = useState(null);
  const [title1, setTitle] = useState("");
  const [channelId1, setChannelId] = useState("");
  const [channelTitle1, setChannelTitle] = useState("");
  const [viewCount1, setViewCount] = useState("");
  const [likeCount1, setLikeCount] = useState("");

  useEffect(()=>{
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data)=> setvideoDetail(data.items[0]));
    console.log(videoDetail)
  }, [id])
  useEffect(()=>{
    if(videoDetail){
      const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetail;
      setTitle(title)
      setChannelId(channelId)
      setChannelTitle(channelTitle)
      setViewCount(viewCount)
      setLikeCount(likeCount)
    }
  }, [videoDetail])

   
  return (
    <Box minHeight="95vh">
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} classname= "react-player" controls />
            <Typography color="#fff" variant='h5' fontWeight="bold" p={2}>
              {title1}
            </Typography>
            <Stack direction="row" justifyContent="space-between">

            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail