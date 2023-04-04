import '../App.css'
import React, {useRef, forwardRef, useEffect} from 'react';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import backgroundImage from '../../assets/image/bg.png'
import PlayAudio from './PlayAudio';

const Home = forwardRef((props, ref) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (ref) {
          ref.current = sectionRef.current;
        }
    }, [ref]);

    const audio = PlayAudio()
    const styles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const handlePlay = (e) => {
        audio.play();
    }

    return (
        <section ref={sectionRef}>
            <Container fluid style={styles}>
                {/* edit disini */}
                <Row className="justify-content-center align-items-center vh-100">
                    <Col md={6}  className="text-center">
                        <h1 className='font-estetik'>ini section home</h1>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod euismod ligula ac faucibus. Nulla in lectus quis risus tristique posuere ac ac velit.</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod euismod ligula ac faucibus. Nulla in lectus quis risus tristique posuere ac ac velit.</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod euismod ligula ac faucibus. Nulla in lectus quis risus tristique posuere ac ac velit.</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod euismod ligula ac faucibus. Nulla in lectus quis risus tristique posuere ac ac velit.</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod euismod ligula ac faucibus. Nulla in lectus quis risus tristique posuere ac ac velit.</p>
                        <Button variant="primary" onClick={handlePlay}>Get Started</Button>
                    </Col>
                </Row>
            </Container>
        </section>
        
    );
});

export default Home;
