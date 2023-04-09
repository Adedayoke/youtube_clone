import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import { Box, Typography, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {Videos} from './';
import { fetchFromApi } from '../utils/fetchFromApi';

const VideoDetail = () => {
  const {id} = useParams();
  const [videoDetail, setvideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [title1, setTitle] = useState("");
  const [channelId1, setChannelId] = useState("");
  const [channelTitle1, setChannelTitle] = useState("");
  const [viewCount1, setViewCount] = useState("");
  const [likeCount1, setLikeCount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data)=> setvideoDetail(data.items[0]));
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=> {
      setVideos(data.items)
      setIsLoading(true)
    });
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

   if(!videoDetail) return "Loading..."
  return (
    <Box minHeight="95vh">
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width="100%" controls />
            <Typography color="#fff" variant='h5' fontWeight="bold" p={2}>
              {title1}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{color : '#fff'}} py={1} px={2}>
              <Link to={`/channel/${channelId1}`}>
                <Typography variant={{sm: 'subtitle1', md: 'h6'}} color="#fff">
                  {channelTitle1}
                  <CheckCircle sx={{fontSize: '12px', color: 'gray', marginLeft: '5px'}} />
                </Typography>
              </Link>
              <Stack direction='row' gap="20px" alignItems="center">
                <Typography variant='body1' sx={{opacity: 0.7}}>
                  {parseInt(viewCount1).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{opacity: 0.7}}>
                  {parseInt(likeCount1).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      <Box px={2} py={{md: 1, xs: 5}} justifyContent="center">
        <Videos isLoading={isLoading} direction='column' videos={videos} />
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail