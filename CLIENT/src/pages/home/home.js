import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

// Assuming you have an image file "homebg" you want to use as background
import homebg from '../images/homebg.jpg'; 

const HomePage = () => {
  return (
    <Container fluid>
      {/* Image Section */}
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <Image src={homebg} fluid className="w-100" alt="Home Page Banner" />
        </Col>
      </Row>

      {/* "Stay With Us" Section */}
      <Row className="text-center my-5">
        <Col>
          <h2>Stay With Us</h2>
          <Button variant="warning" size="lg">
            Check Availability
          </Button>
        </Col>
      </Row>

      {/* Why Book Direct Section */}
      <Row className="text-center my-5 bg-dark text-light py-5">
        <Col>
          <h3>Why Book Direct?</h3>
          <p>Choose Direct Rate when booking your room</p>
          <Button variant="warning" size="lg">
            Check Availability
          </Button>
        </Col>
      </Row>

      {/* Benefits Section */}
      <Row className="text-center">
        <Col xs={12} md={6}>
          <p>✔ Best Rate Guarantee</p>
        </Col>
        <Col xs={12} md={6}>
          <p>✔ £5 off Best Available Rate</p>
        </Col>
      </Row>

      {/* About Our Rooms Section */}
      <Row className="my-5">
        <Col xs={12} md={6}>
          <h3 className="text-uppercase text-muted">Stay With Us</h3>
          <h2>About Our Rooms</h2>
          <p>
            Years of hospitality experience have gone into fine-tuning our rooms to guarantee a great stay. 
            We keep things simple by making sure everything you need is included as standard. High-speed internet access and a desk in your room helps to make life easier when staying over as a business guest or adjoining rooms give peace of mind for families and cots are available on request.
          </p>
          <p>
            Just one and a half miles from the centre of Bromley with its bars, restaurants, The Glades Shopping Centre and train station.
          </p>
          <p>
            Bromley South Railway Station offers regular fast trains to London’s Victoria Station in less than 20 minutes, which means that all the Central London attractions and West End theatres are within very easy reach.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <ul className="list-unstyled">
            <li className="mb-3">
              <span className="me-2">🚗</span> Free Parking
            </li>
            <li className="mb-3">
              <span className="me-2">📶</span> Free Wifi
            </li>
            <li className="mb-3">
              <span className="me-2">🏋️</span> Free use of Gym Facilities for Residents Only
            </li>
            <li className="mb-3">
              <span className="me-2">⚡</span> Electric Car Charging Facilities
            </li>
            <li className="mb-3">
              <span className="me-2">📺</span> Freeview TV
            </li>
            <li className="mb-3">
              <span className="me-2">❄️</span> Air Conditioning
            </li>
          </ul>
        </Col>
      </Row>

      {/* Room Types Section */}
      <Row className="text-center my-5">
        <Col xs={12} md={6} lg={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src="/mnt/data/Capture3.PNG" alt="Deluxe Double" />
            <Card.Body>
              <Card.Title>Deluxe Double</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src="/mnt/data/Capture3.PNG" alt="Deluxe Garden Double" />
            <Card.Body>
              <Card.Title>Deluxe Garden Double</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src="/mnt/data/Capture3.PNG" alt="Superior Double" />
            <Card.Body>
              <Card.Title>Superior Double</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src="/mnt/data/Capture3.PNG" alt="Superior Garden Double" />
            <Card.Body>
              <Card.Title>Superior Garden Double</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
