import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="home">
      <Container>
        <Row className="justify-content-center align-items-center vh-100">
          <Col md={6} className="text-center">
            <h1>Welcome to My Site</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod euismod ligula ac faucibus. Nulla in lectus quis risus tristique posuere ac ac velit.</p>
            <Button variant="primary">Get Started</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
