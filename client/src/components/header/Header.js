import './header.css';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {

  return (
    <Navbar collapseOnSelect expand="lg" className='w-100 text-light px-2  position-absolute ' id="HeaderNav">
      <Container >
        <Navbar.Brand href="#home" >Go Furniture</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto ">
          </Nav>
          <Nav>
            <Nav.Link href="#deets" >Home</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" >
              Products
            </Nav.Link>
            <Nav.Link href="#features" >Blog</Nav.Link>
            <Nav.Link href="#pricing" >About us</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1"  >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"  >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header


{/* <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav> */}