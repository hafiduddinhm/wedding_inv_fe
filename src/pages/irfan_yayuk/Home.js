import React, {useRef, forwardRef, useState, useEffect} from 'react';
import { Box, Button, useTheme } from '@mui/material';
import backgroundImage from '../../assets/image/bg.png'
import bgOrnament from '../../assets/image/4.png'
import bgOrnament2 from '../../assets/image/12.png'
import flowerOrnament1 from '../../assets/image/home.png'
import flowerOrnament2 from '../../assets/image/home2.png'
import flowerOrnament3 from '../../assets/image/home1.png'

const Home = forwardRef((props, ref) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

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

    const theme = useTheme();

    const boxStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: `${windowHeight-25}px`,
        overflowX: 'hidden',
    };

    const ornament1Styles = {
        left: '0%',
        bottom: `${-39+windowWidth*0.005}vh`,
        position: 'absolute',
        display: (windowWidth < 320 && windowHeight >480) ? "none" : "block",
        width: `${70-windowWidth*0.05}%`
    };

    const ornament2Styles = {
        right: '-10%',
        top: `${-windowWidth*0.01}vh`,
        position: 'absolute',
        display: (windowWidth < 320 && windowHeight >480) ? "none" : "block",
        width: `${35-windowWidth*0.01}%`
    };
    
    const ornament3Styles = {
        left: `${-15+windowWidth*0.01}%`,
        top: `${1.5-windowWidth*0.005}vh`,
        position: 'absolute',
        display: (windowWidth < 320 && windowHeight >480) ? "none" : "block",
        width: `${55-windowWidth*0.033}%`
    };


    const sectionRef = useRef(null);

    useEffect(() => {
        if (ref) {
          ref.current = sectionRef.current;
        }
    }, [ref]);

    const styles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'repeat-y',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <section ref={sectionRef} style={{backgroundImage: `url(${backgroundImage})`, overflow: 'hidden'}}>
            <Box style={boxStyles}>
                <div style={{ position: 'absolute', top: '10vh', left: 0, right: 0, display: "flex", justifyContent: "center", alignItems: "center", height: "20vh" }}>
                    <img src={bgOrnament2} style={{ width: '100%', height: '100%' }}></img>
                </div>
                <div style={{ position: 'relative', top: 0, left: 0, width: '100%', zIndex: 0 }}>
                    <div style={ornament3Styles}>
                        <img src={flowerOrnament3} style={{width: '100%',height: '100%'}}></img>
                    </div>
                </div>
                <p className= 'font-estetik' style={{ color: theme.palette.gray.main, marginTop: '16.5vh', marginBottom: 10, zIndex: 0, fontSize: '5vh'}}>The Wedding of</p>
                <div style={{ position: 'relative', top: 0, left: 0, width: '100%', zIndex: 0 }}>
                    <div style={ornament2Styles}>
                        <img src={flowerOrnament2} style={{width: '100%',height: '100%'}}></img>
                    </div>
                </div>
                <h1 style={{ color: theme.palette.primary.main, fontSize: `${140-windowWidth*0.005}%`, marginTop: '10vh' }} >Irfan Arif Widya Kusuma</h1>
                <h1 style={{ color: theme.palette.primary.main, fontSize: `${140-windowWidth*0.005}%` }} >&</h1>
                <h1 style={{ color: theme.palette.primary.main, fontSize: `${140-windowWidth*0.005}%` }} >Yayuk Susanti</h1>
                <h1 style={{ color: theme.palette.primary.main, fontSize: `${120-windowWidth*0.005}%`, marginTop: '2vh' }} >— 07 May 2023 —</h1>
                <div style={{ position: 'absolute', bottom: 25, left: 0, right: 0, display: "flex", justifyContent: "center", alignItems: "center", height: "17vh" }}>
                    <img src={bgOrnament} style={{ width: '100%', height: '100%' }}></img>
                </div>
                <div style={{ position: 'relative', bottom: 25, left: 0, width: '100%', zIndex: 0 }}>
                    <div style={ornament1Styles}>
                        <img src={flowerOrnament1} style={{width: '100%',height: '100%'}}></img>
                    </div>
                </div>
            </Box>
        </section>
        
    );
});

export default Home;
