import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Header = () => {
  return (
    <header>
      <Container fluid>
        <Nav className="justify-content-center bg-success py-3">
          <Nav.Item>
            <Nav.Link href="#stay" className="text-light">Stay</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#dine" className="text-light">Dine</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#weddings" className="text-light">Weddings</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#meetings" className="text-light">Meetings</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#celebrations" className="text-light">Celebrations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#christmas" className="text-light">Christmas 2024</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#events" className="text-light">Special Events</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </header>
  );
};

export default Header;
