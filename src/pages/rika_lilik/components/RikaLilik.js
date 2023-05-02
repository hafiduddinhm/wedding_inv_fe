import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from "react-router-dom";
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
// import AmplopDigital from "./AmplopDigital";
import coupleImage from '../assets/image/brides.png';


const RikaLilikStyle = styled.div`
   
    font-family: 'Roboto', sans-serif !important;
    font-weight: 300 !important;

    .font-serif {
        font-family: 'Playfair Display', serif !important;
    }
    .font-estetik {
        font-family: 'moontime', cursive !important;
    }
`;

const theme = createTheme({
    palette: {
        primary: {
            main: '#043D6A',
        },
        secondary: {
            main: '#1A87A1',
        },
        dark: {
            main: '#043D6A',
        },
        light: {
            main: '#FAFFFF',
        },
        gray: {
            main: '#F59C9C'
        }
    },
});

const RikaLilik = () => {  
    
    const history = useHistory();

    useEffect(() => {
        // scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);

        // listen for history changes and scroll to the top of the page
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });

        // cleanup function to remove the listener when the component unmounts
        return () => {
            unlisten();
        };
    }, [history]);

    const section1Ref = React.useRef(null);
    const section2Ref = React.useRef(null);
    const section3Ref = React.useRef(null);
    const section4Ref = React.useRef(null);
    const section5Ref = React.useRef(null);

    const ogImageUrl = `${window.location.origin}${coupleImage}`;

    return (
        <ThemeProvider theme={theme}>
            <RikaLilikStyle>
                <Helmet>
                    <title>Rika & Lilik Wedding</title>
                    <meta name="description" content="Sabtu, 13 Mei 2023" />
                    <meta property="og:title" content="Rika & Lilik Wedding" />
                    <meta property="og:description" content="Sabtu, 13 Mei 2023" />
                    <meta property="og:image" content={ogImageUrl} />
                    <meta property="og:url" content="https://menghitunghari.vercel.app/" />
                    <meta property="og:type" content="website" />
                    <link rel="canonical" href="https://menghitunghari.vercel.app/rika_lilik" />
                </Helmet>
                <OpeningModal />
                <Home ref={section1Ref}/>
                <Pengantin ref={section2Ref}/>
                <Acara ref={section3Ref}/>
                <Gallery ref={section4Ref} />
                {/* <AmplopDigital/> */}
                <Ucapan ref={section5Ref}/>
                <Closing/>
                <BottomNavbar
                    sectionRefs={[section1Ref, section2Ref, section3Ref, section4Ref, section5Ref]}
                />
            </RikaLilikStyle>
        </ThemeProvider>
    );
};

export default RikaLilik;