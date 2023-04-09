import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia, Skeleton } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoChannelUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle } from '../utils/constants';

const VideoCard = ({video: {id: {videoId}, snippet}, isLoading}) => {
  return (
    <Card sx={{width: {xs : '100%',sm: '358px', md: '320px'}, boxShadow: 'none', borderRadius: 0}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        { isLoading ?
            <CardMedia alt = {snippet?.title} sx={{width: {xs: '100%', sm: '358px', md: '320px'}, height: 100}} image={snippet?.thumbnails?.high?.url} />:
            <Skeleton variant='rectangle' width={{xs: '100%', sm: '358px', md: '320px'}} height={100} animation='wave' />
        }
        </Link>
        <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                {isLoading? <Typography variant='subtitle1' fontWeight="bold" color="#FFF">
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>: <>
                <Skeleton sx={{marginBottom: "8px"}} variant='rounded' width="100%" height="20px" animation='wave' />
                <Skeleton sx={{marginBottom: "8px"}} variant='rounded' width="70%" height="20px" animation='wave' /></>}
            </Link>

            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                {isLoading ? <Typography variant='subtitle2' fontWeight="bold" color="gray">
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}}  />
                </Typography>:
                <Skeleton variant='rounded' width="20%" height="12px" animation='wave' />}
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard