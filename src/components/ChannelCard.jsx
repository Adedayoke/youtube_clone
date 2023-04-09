import React from 'react'
import { Box, CardContent, CardMedia, Skeleton, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture} from '../utils/constants';
import { Link } from 'react-router-dom';
const ChannelCard = ({channelDetail, marginTop, isLoading}) => {
  return (
    <Box sx={{ boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: {xs: '356px', md: '320px'}, height: '326px', margin: 'auto', marginTop}}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
                {isLoading? <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url ? channelDetail?.snippet?.thumbnails?.high?.url : demoProfilePicture} alt ={channelDetail?.snippet?.title} sx={{borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}} />: <Skeleton variant='circular' sx={{mb: 2, border: '1px solid #e3e3e3'}} width='180px' height='180px' animation='wave' />}
                <Typography variant='h6'>
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}}  />
                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography variant='h6'>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard