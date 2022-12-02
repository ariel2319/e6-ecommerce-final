import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SideBarCart from './SideBarCart';

const NavBar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
        <Container className=" nav-container" >
          {/* <Navbar.Brand as={Link} to='/' style={{ fontSize: '1.7em', fontWeight: '600' }}>
          Home
        </Navbar.Brand> */} {/* Le da el nombre en el navbar */}
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"> */}
          <Nav >
            <div className='nav-home'>
              <Nav.Link
                as={Link}
                to='/'
                style={{ fontSize: '1.5em', fontWeight: '600' }}> <b> La Chicha </b>
              </Nav.Link>
            </div>
            <div className='nav-others'>
              <Nav.Link
                title='Login'
                as={Link}
                to='/login'
                style={{margin: '12px' }}>
                <i className="fa-solid fa-user"></i>
              </Nav.Link>

              <Nav.Link
                title='Purchases'
                as={Link}
                to='/purchases'
                style={{margin: '12px' }}>
                <i className="fa-solid fa-box-archive"></i>
              </Nav.Link>

              <Nav.Link
                title='Cart'
                as={Link}
                style={{margin: '12px' }}
                onClick={handleShow} >
                <i className="fa-solid fa-cart-shopping"></i>
              </Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>

      <SideBarCart
        show={show}
        handleClose={handleClose}
      />

    </>




  );
};

export default NavBar;