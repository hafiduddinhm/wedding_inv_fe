import React, { forwardRef, useState, useEffect } from 'react';
import { Grid, Box, Button, useTheme, TextField, Select, MenuItem, InputBase} from '@mui/material'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import backgroundImage from '../../assets/image/bg.png'
import bgOrnament from '../../assets/image/4.png'

import ornament2 from '../../assets/image/14.png'
import ornament3 from '../../assets/image/ucapan.png'


import { Card, CardContent, Typography } from '@mui/material';
// import pattern from '../../assets/image/pattern.png'

const Ucapan = forwardRef((props, sectionRef) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const cards = [
        { id: 1, name: 'Card 1', status: 1, comment: 'Content 1', timestamp: '5 menit yang lalu' },
        { id: 2, name: 'Card 2', status: 0, comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati unde numquam et expedita quod itaque officiis id magnam autem harum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati unde numquam et expedita quod itaque officiis id magnam autem harum!', timestamp: '6 menit yang lalu' },
        { id: 3, name: 'Card 3', status: 1, comment: 'Content 3', timestamp: '7 menit yang lalu' },
        { id: 4, name: 'Card 4', status: 0, comment: 'Content 4', timestamp: '8 menit yang lalu' },
        { id: 5, name: 'Card 5', status: 1, comment: 'Content 5', timestamp: '9 menit yang lalu' },
    ];

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

    const [nama, setNama] = useState('');
    const [ucapan, setUcapan] = useState('');
    const [kehadiran, setKehadiran] = useState(0);
    const [formTouched, setFormTouched] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (!formTouched) {
            setFormTouched(true);
        }
        if (name === 'kehadiran') {
            setKehadiran(value);
        } else {
            if (name === 'nama') {
                if (value.length <= 35) {
                    setNama(value);
                } else {
                    alert("nama terlalu panjang")
                }
            } else if (name === 'ucapan') {
                setUcapan(value);
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission here
        alert("Ucapan berhasil dikirim")
        handleReset();
    };

    const handleReset = () => {
        setNama('');
        setUcapan('');
        setKehadiran(0);
        setFormTouched(false);
    };

    

    const styles ={
        box: {
            display: 'grid', 
            flexDirection: 'column', 
            alignItems: 'center', 
            color: 'dark.main',
            padding: windowWidth > 500 ? '4% 12%' : '20% 12%',
            backgroundImage: `url(${backgroundImage})`,
            overflow: 'hidden' 
        },
        ornament1: {
            width: '100%',
            height: '100%',
            display: (windowWidth < 320) ? "none" : "block",
        },
        ornament: {
            width: '100%',
            height: '100%',
            zIndex: 0,
            rotate:{
                width: '100%',
                height: '100%',
                zIndex: 0,
                transform: 'rotate(-90deg)'
            }
        },
        card: {
            maxHeight: '60vh', 
            overflowY: 'scroll', 
            overflowX: 'hidden',
            borderRadius: '15px',
            padding: '0.5rem',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            txt:{
                header: {
                    fontSize: `${80+windowWidth*0.04}%`,
                    color: theme.palette.dark.main,
                    marginBottom: '5px',
                    fontFamily: 'Ovo'
                },
                time: {
                    fontSize: `${100-windowWidth*0.07}%`,
                    color: theme.palette.dark.main,
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '1.2rem',
                    fontFamily: 'Ovo'
                },
                fontSize: `${100-windowWidth*0.07}%`,
                color: theme.palette.dark.main,
                alignItems: 'center',
                fontFamily: 'Ovo'
            },
        },
        btnStyles: {
            submit:{
                borderRadius: 30,
                padding: '8px 15px',
                fontSize: '0.75rem',
                justifySelf: 'center',
                marginTop: '15px',
                width: '100%',
                backgroundColor: 'dark.main',
                '&:hover': {
                    backgroundColor: '#526AA6',
                    boxShadow: 'none',
                }
            },
            cancel:{
                borderRadius: 30,
                borderColor: 'dark.main',
                padding: '8px 15px',
                fontSize: '0.75rem',
                borderWidth: '2px',
                justifySelf: 'center',
                marginTop: '15px',
                width: '100%',
                '&:hover': {
                    backgroundColor: 'dark.main',
                    color: 'white',
                },
                '&:active': {
                    borderColor: 'dark.main',
                },
            }
        },
        txt:{
            header: {
                fontSize: `${200+windowWidth*0.06}%`,
                marginBottom: '2vh',
                textAlign: 'center',
            },
            larger: {
                textAlign: 'center',
                fontSize: `${110+windowWidth*0.04}%`,
                color: theme.palette.dark.main,
            },
            textAlign: 'center',
            fontSize: `${60+windowWidth*0.04}%`,
            color: theme.palette.dark.main,
            marginBottom: '2vh',
        },
        img: {
            width: '100%',
            marginBottom: '1vh',
        }
    }

    return (
        <section ref={sectionRef} >
            <Box sx={styles.box}>
                <div style={{position: 'relative', marginRight: `${-30+windowWidth*0.005}%`}}>
                    <div style={{position: 'absolute', right: 0, width: `${35-windowWidth*0.01}%`}}>
                        <img src={ornament2} style={styles.ornament.rotate}/>
                    </div>
                </div>
                <h1 className="font-estetik" style={styles.txt.header}>Ucapkan Sesuatu</h1>
                <p style={styles.txt}>Berikan Ucapan & Doa Restu</p>
                <form onSubmit={handleSubmit} style={{zIndex: 0, margin: '7vh 0%'}}>
                    <TextField
                        label="Nama"
                        name="nama"
                        value={nama}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="normal"
                        variant="filled"
                        InputProps={{
                            maxLength: 35,
                            disableUnderline: true,
                            style: { borderRadius: 10, fontSize: '85%', backgroundColor: '#dfdfdf'},
                        }}
                    />
                    <TextField
                        label="Berikan ucapanmu"
                        name="ucapan"
                        value={ucapan}
                        onChange={handleChange}
                        fullWidth
                        required
                        multiline
                        rows={4}
                        margin="none"
                        variant="filled"
                        InputProps={{
                            disableUnderline: true,
                            style: { borderRadius: 10, fontSize: '85%', backgroundColor: '#dfdfdf'},
                        }}
                    />
                    <br/>
                    <p></p>
                    <Select
                        labelId="kehadiran-label"
                        id="kehadiran"
                        name="kehadiran"
                        value={kehadiran}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        variant="filled"
                        disableUnderline
                        style={{borderRadius: 10, paddingBottom: 15, backgroundColor: '#dfdfdf'}}
                        
                    >
                        <MenuItem value={0}>Konfirmasi kehadiran</MenuItem>
                        <MenuItem value={1}>Hadir</MenuItem>
                        <MenuItem value={2}>Berhalangan</MenuItem>
                    </Select>
                    <div style={{ marginTop: '1rem' }}>
                        <Button
                        type="submit"
                        variant="contained"
                        disableRipple={true}
                        disabled={!formTouched}
                        sx={styles.btnStyles.submit}
                        >
                            Kirim
                        </Button>
                        {formTouched && (
                        <Button variant="outlined" disableRipple={true} onClick={handleReset} sx={styles.btnStyles.cancel}>
                            Batal
                        </Button>
                        )}
                    </div>
                </form>
                <div style={styles.card}>
                    <Grid container spacing={2} direction='column' >
                        {cards.map((card) => (
                        <Grid key={card.id} item xs={12} md={6} lg={4}>
                            <Card style={{borderRadius: '10px'}}>
                            <CardContent sx={{paddingBottom: '1.5vh !important'}}>
                                <Typography sx={styles.card.txt.header} variant="h5" component="h2">
                                    {card.name} - {card.status ? 'Hadir' : 'Tidak Hadir'}
                                </Typography>
                                <Typography sx={styles.card.txt} component="p">
                                    {card.comment}
                                </Typography>
                                <Typography sx={styles.card.txt.time} component="p">
                                    <AccessTimeOutlinedIcon sx={{width: '0.9rem', marginRight: '2%', alignSelf: 'center'}}/>
                                    {card.timestamp}
                                </Typography>
                            </CardContent>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div style={{position: 'relative', marginBottom: windowWidth > 500 ? '4rem' : '1rem', marginRight: '-10%'}}>
                    <div style={{position: 'absolute', right: 0, width: `${65-windowWidth*0.025}%`}}>
                        <img src={ornament3} style={styles.ornament}/>
                    </div>
                </div>
                <div style={{position: 'relative', marginBottom: windowWidth > 500 ? '2rem' : '1rem'}}>
                    <div style={{position: 'absolute', width: `${50-windowWidth*0.025}%`}}>
                        <img src={ornament2} style={styles.ornament}/>
                    </div>
                </div>
                
                <div style={{position: 'relative'}}>
                    <div style={{ position: 'absolute', left: -200, right: -200, display: "flex", justifyContent: "center", alignItems: "center", height: "15vh" }}>
                        <img src={bgOrnament} style={{ width: '100%', height: '100%' }}/>
                    </div> 
                </div>
            </Box>
        </section>
    );
});

export default Ucapan;
