import React from 'react'
import { Container,Nav,Navbar } from 'react-bootstrap';
import logo from '../assets/logo.png'
import SearchBox from './SearchBox';

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
  <Container fluid>
    <Navbar.Brand href="#">
    <img
        src= {logo}
        width="110"
        height="40"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
     
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link> <i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
          </Nav>      
        <SearchBox/>
        </Navbar.Collapse>

  </Container>
  
</Navbar>
    </header>
  )
}

export default Header
