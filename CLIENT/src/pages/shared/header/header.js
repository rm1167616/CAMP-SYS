import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Header = () => {
  return (
    <header>
      <Container fluid>
        <Nav className="justify-content-center bg-dark py-3" >
          <Nav.Item>
            <Nav.Link href="#stay" className="text-warning">Stay</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#dine" className="text-warning">Dine</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#weddings" className="text-warning">Weddings</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#meetings" className="text-warning">Meetings</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#celebrations" className="text-warning">Celebrations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#christmas" className="text-warning">Christmas 2024</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#events" className="text-warning">Special Events</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact" className="text-warning">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </header>
  );
};

export default Header;
