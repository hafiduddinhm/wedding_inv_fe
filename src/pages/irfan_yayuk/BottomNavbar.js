// TODO: BELOM NYESUAIN STYLE DESAINNYA

import React, { useState, useEffect, forwardRef } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Typography from '@mui/material/Typography';
import {Box, Fab, useMediaQuery} from '@mui/material';

// icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';

import PlayAudio from './PlayAudio';

const BottomNavbar = ({ sectionRefs }) => {
  const [value, setValue] = useState('home');
  const [play, setPlay] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const scrollToSection = (index) => {
    window.scrollTo({
      top: sectionRefs[index].current.offsetTop,
      behavior: "smooth"
    });
  };

  const audio = PlayAudio()

  const handlePlay = (event) => {
    if (play) audio.pause();
    else audio.play();
  };

  audio.addEventListener('play', () => {
    setPlay(true)
  });

  audio.addEventListener('pause', () => {
    setPlay(false)
  });

  const isSmallScreen = useMediaQuery('(max-width:400px)');

  return (
    <>
      <Fab sx={{ position: 'fixed', bottom: 75, right: 16}} onClick={handlePlay}>
        {play ? <PauseCircleFilledRoundedIcon /> : <PlayCircleRoundedIcon />}
      </Fab>
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} elevation={3}>
        <BottomNavigation sx={{ width: '100%', flex: 1 }} value={value} onChange={handleChange}>
          <BottomNavigationAction
            label={<Typography style={{ fontSize: isSmallScreen ? '10px' : '14px' }}>Home</Typography>}
            value="home"
            icon={<HomeRoundedIcon sx={{ fontSize: isSmallScreen ? '18px' : '24px' }} />}
            sx={{ padding: '0px', minWidth: '40px' }}
            onClick={() => scrollToSection(0)} 
          />
          <BottomNavigationAction
            label={<Typography style={{ fontSize: isSmallScreen ? '10px' : '14px' }}>Pengantin</Typography>}
            value="home"
            icon={<FavoriteRoundedIcon sx={{ fontSize: isSmallScreen ? '18px' : '24px' }} />}
            sx={{ padding: '0px', minWidth: '40px' }} 
            onClick={() => scrollToSection(1)}
          />
          <BottomNavigationAction
            label={<Typography style={{ fontSize: isSmallScreen ? '10px' : '14px' }}>Acara</Typography>}
            value="home"
            icon={<EventNoteRoundedIcon sx={{ fontSize: isSmallScreen ? '18px' : '24px' }} />}
            sx={{ padding: '0px', minWidth: '40px' }} 
            onClick={() => scrollToSection(2)}
          />
          <BottomNavigationAction
            label={<Typography style={{ fontSize: isSmallScreen ? '10px' : '14px' }}>Galeri</Typography>}
            value="home"
            icon={<CollectionsRoundedIcon sx={{ fontSize: isSmallScreen ? '18px' : '24px' }} />}
            sx={{ padding: '0px', minWidth: '40px' }} 
            onClick={() => scrollToSection(3)}
          />
          <BottomNavigationAction
            label={<Typography style={{ fontSize: isSmallScreen ? '10px' : '14px' }}>Ucapan</Typography>}
            value="home"
            icon={<SmsRoundedIcon sx={{ fontSize: isSmallScreen ? '18px' : '24px' }} />}
            sx={{ padding: '0px', minWidth: '40px' }}
            onClick={() => scrollToSection(4)}
          />
        </BottomNavigation>
      </Box>
    </>
    
  );
};

export default BottomNavbar;