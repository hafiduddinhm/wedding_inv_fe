import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import Modal from 'react-modal';
import {Box, Button, useTheme} from '@mui/material';
import {MailOutlined} from '@mui/icons-material';
import {motion} from 'framer-motion';

import letterOrnament from '../assets/image/opening.png';
import ornament1 from '../assets/image/opening1.png';
import ornament2 from '../assets/image/opening2.png';
import ornament3 from '../assets/image/opening3.png';

const OpeningModal = ({onClosed = () => {}}) => {
  const location = useLocation();
  const [guest, setGuest] = useState('');

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(
    window.innerHeight,
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const toParam = searchParams.get('to');
    setGuest(toParam);
  }, [location.search]);

  const theme = useTheme();

  const modalStyles = {
    content: {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      position: 'absolute',
      zIndex: 3,
      padding: '0',
      border: 'none',
      borderRadius: '0',
      backgroundColor: theme.palette.light.main,
      overflow: 'hidden',
    },
    overlay: {
      transition: 'opacity 500ms ease-in-out',
      position: 'absolute',
      zIndex: 3,
    },
  };
  const styles = {
    box2: {
      textAlign: 'left',
      justifyItems: 'left',
      position: 'absolute',
      bottom: '7%',
      left: '8.5%',
      zIndex: 4,
    },
    ornament: {
      width: `${50 - windowWidth * 0.025}%`,
    },
    ornament1: {
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 0,
      width:
        windowWidth > windowHeight
          ? `${95 - windowHeight * 0.03}vh`
          : `${80 - windowWidth * 0.03}%`,
    },
    ornament2: {
      position: 'fixed',
      right: 0,
      top: 0,
      zIndex: 0,
      width:
        windowWidth > windowHeight
          ? `${105 - windowHeight * 0.03}vh`
          : `${100 - windowWidth * 0.03}%`,
    },
    ornament3: {
      position: 'fixed',
      right: 0,
      bottom: 0,
      zIndex: 0,
      width:
        windowWidth > windowHeight
          ? `${100 - windowHeight * 0.03}vh`
          : `${105 - windowWidth * 0.03}%`,
    },
    letterOrnament: {
      width: `${90 - windowWidth * 0.045}%`,
      position: 'absolute',
      justifySelf: 'center',
      alignSelf: 'center',
      marginTop: '-10vh',
    },
    button: {
      transformOrigin: 'center',
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 30,
      fontSize:
        windowWidth > windowHeight
          ? `${2 + windowHeight * 0.001}vh`
          : `${15 + windowWidth * 0.2}%`,
    },
    txt1: {
      color: theme.palette.primary.main,
      fontFamily: 'moontime',
      zIndex: 3,
      fontSize:
        windowWidth > windowHeight
          ? `${-5 + windowHeight * 0.025}vh`
          : `${170 + windowWidth * 0.5}%`,
    },
    txt2: {
      color: theme.palette.secondary.main,
      fontFamily: 'Roboto',
      fontWeight: 300,
      zIndex: 3,
      fontSize:
        windowWidth > windowHeight
          ? `${+windowHeight * 0.005}vh`
          : `${60 + windowWidth * 0.1}%`,
    },
  };
  const boxStyles = {
    display: 'grid',
    // flexDirection: 'column',
    // alignItems: 'center',
    height: window.innerHeight,
    overflow: 'hidden',
    padding: '6.8vh 8.5%',
  };

  // const audio = PlayAudio()
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  }

  const closeModal = () => {
    document.body.style.overflowY = 'auto';
    setIsOpen(false);
    onClosed();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={500}
      style={modalStyles}>
      <Box style={boxStyles}>
        <img src={ornament1} alt="flower1" style={styles.ornament1} />
        <img src={ornament2} alt="flower2" style={styles.ornament2} />
        <h1
          style={{
            ...styles.txt1,
            textAlign: 'end',
            justifySelf: 'right',
          }}
          className="font-estetik">
          Save the
          <br />
          Date
        </h1>
        <img
          src={letterOrnament}
          alt="brides"
          style={styles.letterOrnament}
        />
        <Box style={styles.box2}>
          <Box sx={{marginBottom: '3vh'}}>
            <h1 style={styles.txt2}>The Wedding of</h1>
            <h1
              style={{
                ...styles.txt1,
                fontSize: `${2.2 + windowWidth * 0.001}rem`,
              }}>
              Rika & Lilik
            </h1>
          </Box>
          <Box sx={{marginBottom: '4vh'}}>
            {guest != null && (
              <>
                <h1 style={styles.txt2}>
                  Kepada Bapak/Ibu/Saudara/i
                </h1>
                <h1 style={{...styles.txt2, fontWeight: 'bold'}}>
                  {guest}
                </h1>
              </>
            )}
            {guest === null && (
              <>
                <br />
              </>
            )}
          </Box>
          <motion.div
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            initial={{scale: 1}}>
            <Button
              variant="contained"
              onClick={closeModal}
              style={styles.button}>
              <MailOutlined
                style={{
                  marginRight: '7px',
                  fontSize: `${90 + windowWidth * 0.03}%`,
                }}
              />
              Buka Undangan
            </Button>
          </motion.div>
        </Box>
        <img src={ornament3} alt="flower3" style={styles.ornament3} />
      </Box>
    </Modal>
  );
};
export default OpeningModal;
