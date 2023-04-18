import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import OpeningModal from "./OpeningModal"
import Home from './Home'
import Pengantin from './Pengantin'
import Acara from "./Acara"
import BottomNavbar from "./BottomNavbar"
import Ucapan from "./Ucapan"
import Closing from "./Closing"
import Gallery from "./galery";
import coupleImage from '../assets/image/11.png';
import AmplopDigital from "./AmplopDigital";

const ElmaHendraStyle = styled.div`
   
    font-family: 'Glacial Indifference', sans-serif !important;

    .font-estetik {
        font-family: 'moontime', cursive !important;
    }
`;

const theme = createTheme({
    palette: {
        primary: {
            main: '#9B3939',
        },
        secondary: {
            main: '#e0e2e4',
        },
        dark: {
            main: '#6D423F',
        },
        light: {
            main: '#F6F3F1',
        },
        gray: {
            main: '#F59C9C'
        }
    },
});

const ElmaHendra = () => {    
    const section1Ref = React.useRef(null);
    const section2Ref = React.useRef(null);
    const section3Ref = React.useRef(null);
    const section4Ref = React.useRef(null);
    const section5Ref = React.useRef(null);

    const ogImageUrl = `${window.location.origin}${coupleImage}`;

    return (
        <ThemeProvider theme={theme}>
            <ElmaHendraStyle>
                <Helmet>
                    <title>Irfan & Yayuk Wedding</title>
                    <meta name="description" content="Minggu, 7 Mei 2023" />
                    <meta property="og:title" content="Irfan & Yayuk Wedding" />
                    <meta property="og:description" content="Minggu, 7 Mei 2023" />
                    <meta property="og:image" content={ogImageUrl} />
                    <meta property="og:url" content="https://menghitunghari.vercel.app/" />
                    <meta property="og:type" content="website" />
                    <link rel="canonical" href="https://menghitunghari.vercel.app/irfan_yayuk" />
                </Helmet>
                <OpeningModal />
                <Home ref={section1Ref}/>
                <Pengantin ref={section2Ref}/>
                <Acara ref={section3Ref}/>
                <Gallery ref={section4Ref} />
                <AmplopDigital/>
                <Ucapan ref={section5Ref}/>
                <Closing/>
                <BottomNavbar
                    sectionRefs={[section1Ref, section2Ref, section3Ref, section4Ref, section5Ref]}
                />
            </ElmaHendraStyle>
        </ThemeProvider>
    );
};

export default ElmaHendra;