import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function BottomNavbar() {
  return (
    <Navbar bg="light" expand="lg" fixed="bottom">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#pengantin">Pengantin</Nav.Link>
          <Nav.Link href="#acara">Acara</Nav.Link>
          <Nav.Link href="#galeri">Galeri</Nav.Link>
          <Nav.Link href="#ucapan">Ucapan</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BottomNavbar;
