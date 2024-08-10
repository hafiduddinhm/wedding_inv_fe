import React, { forwardRef, useState, useEffect } from "react";
import {
  Grid,
  Box,
  Button,
  useTheme,
  // Typography
} from "@mui/material";
// import { GoogleMap, LoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';
import { NearMeOutlined, EditCalendarRounded } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import bgcard1 from "../assets/image/acara1.png";
import bgcard2 from "../assets/image/acara2.png";
import bgcard3 from "../assets/image/acara3.png";
import ring from "../assets/image/ring.png";

const Acara = forwardRef((props, sectionRef) => {
  const linkLokasi =
    "https://www.google.com/maps/@-7.1095518,111.8174271,3a,74.999992y,279.965576h,83.397614t/data=!3m4!1e1!3m2!1sVSYsZerKDMEwD2D7k87HyA!2e0?lucs=47067412&g_st=iw";
  const linkCalendar =
    "https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Bambang+%26+Endah&location=https%3A%2F%2Fgoo.gl%2Fmaps%2FQVAcHAi2Pecdaw3a6&dates=20230514T100000+0700/20230514T150000+0700&details=https%3A%2F%2Fmenghitunghari.vercel.app%2Fbambang%5Fendah%2F1";
  const receptionDate = "2023-05-14T10:00:00";

  // const location = {
  //     lat: -6.940250,
  //     lng: 111.594725
  // };
  // const zoom = 17
  //const API_KEY = process.env.MAPS_API_KEY;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  // const [map, setMap] = useState(null)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const targetDate = new Date(receptionDate);
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setCountdown({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    window.open(linkLokasi);
  };

  const handleCalClick = () => {
    window.open(linkCalendar);
  };

  // const onLoad = (map) => {
  //     setMap(map);
  // }

  // const onUnmount = () => {
  //     setMap(null);
  // }

  const theme = useTheme();

  const styles = {
    section: {
      backgroundColor: theme.palette.primary.main,
      overflow: "hidden",
      // marginTop: '-15vh',
    },
    box: {
      display: "grid",
      flexDirection: "column",
      alignItems: "center",
      justifyItems: "center",
      color: "light.main",
      margin: "0vh 15% 0 15%",
    },
    gridItem: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.dark.main,
      borderRadius: 30,
      boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.35)",
      alignItems: "center",
      padding: `${10 - windowWidth * 0.005}%`,
    },
    countdown: {
      display: "flex",
      flexDirection: "column",
      width: "110%",
      backgroundColor: theme.palette.dark.main,
      borderRadius: 30,
      boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.35)",
      alignItems: "center",
      padding: `${10 - windowWidth * 0.005}%`,
      margin: "10vh 0",
    },
    bgcard: {
      width: "80%",
    },
    btnStyles: {
      borderRadius: 30,
      position: "relative",
      padding: "8px 15px",
      fontSize: "0.75rem",
      justifySelf: "center",
      width: windowWidth > 600 ? "45%" : "80%",
      backgroundColor: theme.palette.light.main,
      color: theme.palette.dark.main,
    },
    hr: {
      border: 0,
      clear: "both",
      display: "block",
      width: "85%",
      backgroundColor: "#FFFFFF",
      height: "2px",
      opacity: 0.8,
      margin: "2%",
    },
    txt: {
      header: {
        fontSize: `${120 + windowWidth * 0.06}%`,
        fontWeight: "bold",
        textAlign: "center",
      },
      h5: {
        textAlign: "center",
        fontSize: `${90 + windowWidth * 0.04}%`,
        fontWeight: "bold",
      },
      textAlign: "center",
      fontSize: `${80 + windowWidth * 0.02}%`,
      marginBottom: 0,
    },
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <Box sx={styles.box}>
        <hr style={styles.hr} />
        <h1 className="font-serif" style={styles.txt.header}>
          Save the Date
        </h1>
        <hr style={styles.hr} />
        <br />
        <p style={{ ...styles.txt }}>
          Dengan memohon rahmat dan ridho Allah SWT, kami mengundang
          Bapak/Ibu/Saudara/i untuk menghadiri pernikahan putra-putri kami,
          pada:
        </p>
        <br />
        <Grid
          container
          spacing={4}
          style={{
            position: "relative",
            marginTop:
              windowWidth < 600 ? "10%" : `${18 - windowWidth * 0.005}%`,
            marginLeft: "0%",
            justifyContent: "center",
          }}
        >
          <Grid
            data-aos="fade-right"
            data-aos-duration="1500"
            item
            xs={12}
            sm={12}
            md={5}
            style={styles.gridItem}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2 className="font-serif" style={styles.txt.header}>
                Akad Nikah
              </h2>
              <img
                src={ring}
                style={{ width: `${18 + windowWidth * 0.003}%` }}
              />
            </div>
            <hr style={styles.hr} />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              <img src={bgcard1} style={styles.bgcard}></img>
              <p
                style={{
                  ...styles.txt,
                  position: "absolute",
                  marginBottom: "7%",
                  fontWeight: "bold",
                }}
              >
                Minggu, 14 Mei 2023
                <br />
                09.00 s/d selesai
              </p>
            </div>
            <br />
            <Box
              style={{
                padding: windowWidth > 600 ? "1% 5% 5% 5%" : "1% 5% 5% 5%",
              }}
            >
              <p style={styles.txt}>
                <b>Alamat:</b>
                <br />
                Kediaman mempelai wanita
                <br />
                Dk. Sembung RT 015 RW 004 Ds. Kanten, Trucuk, Bojonegoro
              </p>
            </Box>
            <br />
            <Button
              variant="contained"
              onClick={handleButtonClick}
              style={styles.btnStyles}
            >
              <NearMeOutlined
                style={{ marginRight: "7px", fontSize: "1rem" }}
              />
              Lihat Lokasi
            </Button>
            <br />
          </Grid>
          <Grid item />
          <Grid
            data-aos="fade-left"
            data-aos-duration="1500"
            item
            xs={12}
            sm={12}
            md={5}
            style={styles.gridItem}
          >
            <h2 className="font-serif" style={styles.txt.header}>
              Resepsi Pernikahan
            </h2>
            <hr style={styles.hr} />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              <img src={bgcard2} style={styles.bgcard}></img>
              <p
                style={{
                  ...styles.txt,
                  position: "absolute",
                  marginBottom: "7%",
                  fontWeight: "bold",
                }}
              >
                Minggu, 14 Mei 2023
                <br />
                10.00 s/d selesai
              </p>
            </div>
            <br />
            <Box
              style={{
                padding: windowWidth > 600 ? "1% 5% 5% 5%" : "1% 5% 5% 5%",
              }}
            >
              <p style={styles.txt}>
                <b>Alamat:</b>
                <br />
                Kediaman mempelai wanita
                <br />
                Dk. Sembung RT 015 RW 004 Ds. Kanten, Trucuk, Bojonegoro
              </p>
            </Box>
            <br />
            <Button
              variant="contained"
              onClick={handleButtonClick}
              style={styles.btnStyles}
            >
              <NearMeOutlined
                style={{ marginRight: "7px", fontSize: "1rem" }}
              />
              Lihat Lokasi
            </Button>
            <br />
          </Grid>
        </Grid>
        <Box style={styles.countdown}>
          <h2 className="font-serif" style={styles.txt.header}>
            Menghitung Hari
          </h2>
          <hr style={styles.hr} />
          <p style={styles.txt}>menuju hari bahagia</p>
          <br />
          <Button
            variant="contained"
            onClick={handleCalClick}
            style={styles.btnStyles}
          >
            <EditCalendarRounded
              style={{ marginRight: "7px", fontSize: "1rem" }}
            />
            Simpan ke Kalender
          </Button>
          <br />
          <Box
            className="font-serif"
            sx={{
              display: "flex",
              width: `${95 - windowWidth * 0.035}%`,
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <AnimatePresence>
                <motion.p
                  key={countdown.days}
                  exit={{ y: 20, opacity: 0 }}
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  style={{
                    ...styles.txt,
                    fontWeight: "bold",
                    fontSize: "200%",
                    position: "absolute",
                  }}
                >
                  {countdown.days}
                </motion.p>
              </AnimatePresence>
              <p
                style={{
                  ...styles.txt,
                  fontSize: "100%",
                  marginTop: `${12 - windowHeight * 0.006}vh`,
                }}
              >
                Hari
              </p>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <AnimatePresence>
                <motion.p
                  key={countdown.hours}
                  exit={{ y: 20, opacity: 0 }}
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  style={{
                    ...styles.txt,
                    fontWeight: "bold",
                    fontSize: "200%",
                    position: "absolute",
                  }}
                >
                  {countdown.hours}
                </motion.p>
              </AnimatePresence>
              <p
                style={{
                  ...styles.txt,
                  fontSize: "100%",
                  marginTop: `${12 - windowHeight * 0.006}vh`,
                }}
              >
                Jam
              </p>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <AnimatePresence>
                <motion.p
                  key={countdown.minutes}
                  exit={{ y: 20, opacity: 0 }}
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  style={{
                    ...styles.txt,
                    fontWeight: "bold",
                    fontSize: "200%",
                    position: "absolute",
                  }}
                >
                  {countdown.minutes}
                </motion.p>
              </AnimatePresence>
              <p
                style={{
                  ...styles.txt,
                  fontSize: "100%",
                  marginTop: `${12 - windowHeight * 0.006}vh`,
                }}
              >
                Menit
              </p>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <AnimatePresence>
                <motion.p
                  key={countdown.seconds}
                  exit={{ y: 20, opacity: 0 }}
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  style={{
                    ...styles.txt,
                    fontWeight: "bold",
                    fontSize: "200%",
                    position: "absolute",
                  }}
                >
                  {countdown.seconds}
                </motion.p>
              </AnimatePresence>
              <p
                style={{
                  ...styles.txt,
                  fontSize: "100%",
                  marginTop: `${12 - windowHeight * 0.006}vh`,
                }}
              >
                Detik
              </p>
            </Box>
          </Box>
          <br />
          <img src={bgcard3} style={{ height: "30vh" }}></img>
          <br />
        </Box>
      </Box>
    </section>
  );
});

export default Acara;
