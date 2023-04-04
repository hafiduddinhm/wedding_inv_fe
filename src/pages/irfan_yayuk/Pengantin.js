import '../App.css'
import React, { forwardRef } from 'react';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import backgroundImage from '../../assets/image/bg.png'

const Pengantin = forwardRef((props, sectionRef) => {

    const styles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <section ref={sectionRef}>
            <Container fluid style={styles}>
                <Row className="justify-content-center align-items-center vh-100">
                    <Col md={6}  className="text-center">
                        <h1 className='font-estetik'>ini section pengantin</h1>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod euismod ligula ac faucibus. Nulla in lectus quis risus tristique posuere ac ac velit.</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod euismod ligula ac faucibus. Nulla in lectus quis risus tristique posuere ac ac velit.</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod euismod ligula ac faucibus. Nulla in lectus quis risus tristique posuere ac ac velit.</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod euismod ligula ac faucibus. Nulla in lectus quis risus tristique posuere ac ac velit.</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod euismod ligula ac faucibus. Nulla in lectus quis risus tristique posuere ac ac velit.</p>
                        <Button variant="primary">Get Started</Button>
                    </Col>
                </Row>
                <Row style={{minHeight: '30pt'}}></Row>
            </Container>
        </section>
        
    );
});

export default Pengantin;
