import React, {useState, useEffect} from 'react';
import { Box, Typography } from '@mui/material';
import {Videos} from './';
import { fetchFromApi } from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const {searchTerm}= useParams();
  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items))
    setIsLoading(true);
  }, [searchTerm]);
  return (
    <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
          Search Results for: <span style={{color: '#F31503'}}>{searchTerm}</span> videos
        </Typography>
        <Videos isLoading={isLoading} videos={videos} />
      </Box>
  )
}

export default SearchFeed