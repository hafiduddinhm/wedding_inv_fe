import React, { forwardRef, useState, useEffect } from 'react';
import { Grid, Box, Button, useTheme } from '@mui/material'
import PlaceIcon from '@mui/icons-material/PlaceOutlined';
import backgroundImage from '../assets/image/bgAcara.png'
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const Acara = forwardRef((props, sectionRef) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const linkLokasi = 'https://goo.gl/maps/inffUEmwiEWBDq8YA'

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const theme = useTheme();

    const handleButtonClick = () => {
        window.open(linkLokasi);
    }

    const styles ={
        section: {
            backgroundColor: theme.palette.light.main, 
            backgroundImage: `url(${backgroundImage})`, 
            backgroundRepeat: 'no-repeat', 
            overflow: 'hidden', 
            marginTop: '-35vh',
        },
        box: {
            display: 'grid', 
            flexDirection: 'column', 
            alignItems: 'center', 
            color: 'primary.main',
            margin: '0% 15%' 
        },
        // ornament1: {
        //     justifySelf: 'end',
        //     alignSelf: 'start',
        //     marginLeft: '-22%',
        //     marginTop: '-20vh',
        //     left: 0,
        //     width: `${57+windowWidth*0.03}%`,
        //     height: `${27+windowWidth*0.01}vh`,
        //     backgroundImage: `url(${ornament1})`,
        //     backgroundRepeat: 'no-repeat',
        //     backgroundSize: 'contain',
        // },
        btnStyles: {
            borderRadius: 30,
            position: 'relative',
            padding: '8px 15px',
            fontSize: '0.75rem',
            justifySelf: 'center',
            marginTop: windowWidth > 600 ? '30vh' : '15vh',
            width: windowWidth > 600 ? '45%' : '80%',
            backgroundColor: '#F29999'
        },
        txt:{
            header: {
                fontSize: `${100+windowWidth*0.06}%`,
                marginTop: '2vh',
                textAlign: 'center',
            },
            h5: {
                textAlign: 'center',
                fontSize: `${90+windowWidth*0.04}%`,
                fontWeight: 'bold',
                color: theme.palette.dark.main
            },
            textAlign: 'center',
            fontSize: `${70+windowWidth*0.04}%`,
            color: theme.palette.dark.main
        },
    }

    return (
        <section ref={sectionRef} style={styles.section}>
            <Box sx={styles.box}>    
                {/* <div style={styles.ornament1} /> */}
                <Grid container spacing={4} style={{ position: 'relative', marginTop: windowWidth < 600 ? '60%' : `${20-windowWidth*0.01}%`, marginLeft: '-5%', marginBottom: '-20%', justifyContent: 'center' }}>
                    <Grid data-aos='fade-right' data-aos-duration="1500"  item xs={12} sm={6} style={{justifyContent: 'center', padding: 0}}>
                        <h2 className="font-estetik" style={{textAlign: 'center'}}>Akad Nikah</h2>
                        <Box style={{ padding: windowWidth > 600 ? '1% 5% 5% 5%' : '1% 5% 5% 5%'}}>
                            <p style={styles.txt}>SENIN, 15 Mei 2023<br/>Pukul 09.00 WIB s/d Selesai<br/>Alamat: Rumah mempelai wanita (Dsn.Ngablak, Ds. Mrayun, RT 003 RW 005, Kec. Sale, Kab. Rembang) </p>
                        </Box>
                    </Grid>
                    <Grid data-aos='fade-left' data-aos-duration="1500" item xs={12} sm={6} style={{justifyContent: 'center', padding: 0}}>
                        <h2 className="font-estetik" style={{textAlign: 'center'}}>Resepsi</h2>
                        <Box style={{ padding: windowWidth > 600 ? '1% 5% 5% 5%' : '1% 5% 5% 5%'}}>
                            <p style={styles.txt}>SENIN, 15 Mei 2023<br/>Pukul 10.00 WIB s/d Selesai<br/>Alamat: Rumah mempelai wanita (Dsn.Ngablak, Ds. Mrayun, RT 003 RW 005, Kec. Sale, Kab. Rembang)</p>
                        </Box>
                    </Grid>
                </Grid>
                <Button data-aos='fade-up' data-aos-duration="1500" variant="contained" onClick={handleButtonClick} style={styles.btnStyles}>
                    <PlaceIcon style={{ marginRight: '7px', fontSize: '1rem' }} />
                    Lihat Lokasi
                </Button>
                <br/>
                <br/>
                <br/>
                <br/>
            </Box>
        </section>

    );
});

export default Acara;
