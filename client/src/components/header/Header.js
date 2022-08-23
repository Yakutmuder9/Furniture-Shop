import './header.css';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {

  return (
    <Navbar collapseOnSelect expand="lg" className='w-100 text-light px-2  position-absolute ' id="HeaderNav">
      <Container >
        <Navbar.Brand href="/" >Go Furniture</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto ">
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="product" >
              Products
            </Nav.Link>
            <Nav.Link href="blog" >Blog</Nav.Link>
            <Nav.Link href="about" >About us</Nav.Link>
            <Nav.Link href="cart" ><span className="material-symbols-outlined">
              shopping_cart
            </span></Nav.Link>

            <Dropdown>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                <span className="material-symbols-outlined" id="collasible-nav-dropdown">
                  person</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="login">Login</Dropdown.Item>
                <Dropdown.Item href="signup">Sign Up</Dropdown.Item>
                <Dropdown.Item href="/">Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
