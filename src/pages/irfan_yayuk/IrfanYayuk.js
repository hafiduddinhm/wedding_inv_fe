import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import OpeningModal from "./OpeningModal"
import Home from './Home'
import Pengantin from './Pengantin'
import BottomNavbar from "./BottomNavbar";
import './App.css'

const theme = createTheme({
    palette: {
        primary: {
            main: '#283a68',
        },
        secondary: {
            main: '#e0e2e4',
        },
        dark: {
            main: '#394a73',
        },
        light: {
            main: '#eff1ec',
        },
        gray: {
            main: '#777687'
        }
    },
});

const IrfanYayuk = () => {    
    const section1Ref = React.useRef(null);
    const section2Ref = React.useRef(null);

    return (
        <ThemeProvider theme={theme}>
            <OpeningModal/>
            <Home ref={section1Ref}/>
            <Pengantin ref={section2Ref}/>
            <BottomNavbar
                sectionRefs={[section1Ref, section2Ref]}
            />
        </ThemeProvider>
    );
};

export default IrfanYayuk;