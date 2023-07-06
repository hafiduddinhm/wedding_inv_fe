import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import OpeningModal from "./OpeningModal";
import Home from "./Home";
import Pengantin from "./Pengantin";
import Acara from "./Acara";
import BottomNavbar from "./BottomNavbar";
import Ucapan from "./Ucapan";
import Closing from "./Closing";
import Gallery from "./galery";
import AmplopDigital from "./AmplopDigital";
import PerjalananCerita from "./PerjalananCinta";
import coupleImage from "../assets/image/brides.png";

const AjayUwinStyle = styled.div`
  font-family: "glacial-Indifference", sans-serif !important;

  .font-estetik {
    font-family: "moontime", cursive !important;
  }

  .font-serif {
    font-family: "Playfair Display", serif !important;
    font-weight: bold !important;
  }
`;

const theme = createTheme({
  palette: {
    primary: {
      main: "#6D423F",
    },
    secondary: {
      main: "#FFD4BC",
    },
    dark: {
      main: "#6D423F",
    },
    light: {
      main: "#FFFBF5",
    },
    gray: {
      main: "#F59C9C",
    },
  },
});

const AjayUwin = () => {
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
      <AjayUwinStyle>
        <Helmet>
          <title>Ajay & Uwin Wedding</title>
          <meta name="description" content="Minggu, 16 Mei 2023" />
          <meta property="og:title" content="Ajay & Uwin Wedding" />
          <meta property="og:description" content="<Minggu>, 16 Mei 2023" />
          <meta property="og:image" content={ogImageUrl} />
          <meta
            property="og:url"
            content="https://menghitunghari.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <link
            rel="canonical"
            href="https://menghitunghari.vercel.app/ajay_uwin"
          />
        </Helmet>
        <OpeningModal />
        <Home ref={section1Ref} />
        <Pengantin ref={section2Ref} />
        <PerjalananCerita />
        <Acara ref={section3Ref} />
        <Gallery ref={section4Ref} />
        <AmplopDigital />
        <Ucapan ref={section5Ref} />
        <Closing />
        <BottomNavbar
          sectionRefs={[
            section1Ref,
            section2Ref,
            section3Ref,
            section4Ref,
            section5Ref,
          ]}
        />
      </AjayUwinStyle>
    </ThemeProvider>
  );
};

export default AjayUwin;
