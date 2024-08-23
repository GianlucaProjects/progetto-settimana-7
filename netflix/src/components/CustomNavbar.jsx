import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsSearch, BsBell, BsPersonCircle } from 'react-icons/bs';

function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      style={{ backgroundColor: '#221f1f' }}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="logo.png" alt="Logo" style={{ width: '100px', height: '55px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className="fw-bold active">Home</Nav.Link>
            <Nav.Link href="#" className="fw-bold">TV Shows</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Movies</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Recently Added</Nav.Link>
            <Nav.Link href="#" className="fw-bold">My List</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <BsSearch className="icons me-3" />
            <div id="kids" className="fw-bold me-3">KIDS</div>
            <BsBell className="icons me-3" />
            <BsPersonCircle className="icons" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
