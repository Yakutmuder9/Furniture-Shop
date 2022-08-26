import './header.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom"
import {
    getTotals,
} from "../../redux/features/CartSlice";

    

const Header = () => {
    const cart = useSelector((state) => state.getCart);
    const dispatch = useDispatch();
    const { cartTotalQuantity } = cart

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    return (
    <Navbar collapseOnSelect expand="lg" className='w-100 text-light px-1  position-absolute ' id="HeaderNav">
      <Container >
        <Navbar.Brand href="/" className='h-100 text-center d-flex align-itmes-center'>
          <span className="material-symbols-outlined pt-1 ">
            military_tech
          </span> Go Furniture</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto ">
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="/product" >
              Products
            </Nav.Link>
            <Nav.Link href="/blog" >Blog</Nav.Link>
            <Nav.Link href="/about" >About us</Nav.Link>
            <Nav.Link href="/cart" ><span className="material-symbols-outlined">
              <button type="button" className="btn position-relative">
                <span className="material-symbols-outlined">
                  shopping_cart
                </span>
                <span className="position-absolute top-0 translate-middle badge rounded-pill" style={{background: "#301f01"}}>
                  {cartTotalQuantity}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </span></Nav.Link>

            <Dropdown>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                <span className="material-symbols-outlined" id="collasible-nav-dropdown">
                  person</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/login">Login</Dropdown.Item>
                <Dropdown.Item href="/signup">Sign Up</Dropdown.Item>
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
