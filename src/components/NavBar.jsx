import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (

    <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
      <Container >
        <Navbar.Brand as={Link} to='/' style={{ fontSize: '1.7em', fontWeight: '600' }}> Home </Navbar.Brand> {/* Le da el nombre en el navbar */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to='/login'
              style={{ fontSize: '1.4em', fontWeight: '500' }}>  Login
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/purchases'
              style={{ fontSize: '1.4em', fontWeight: '500' }}> Purchases
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;