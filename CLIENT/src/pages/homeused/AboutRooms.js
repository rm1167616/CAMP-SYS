// AboutRooms.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../homeused/AboutRoom.css';

const AboutRooms = ({ swipeHandlers, swipedUp }) => {
  return (
    <>
      <Container fluid className="about-rooms-section bg-white text-center">
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="about-rooms-gsap-text gsap-text text-left">
            <h2>About Our Rooms</h2>
            <p>Years of hospitality experience have gone into fine-tuning our rooms to guarantee a great stay.</p>
            <Button className="check-availability-btn" style={{backgroundColor:'4a5a3e'}}>Check Availability</Button>
          </Col>
          <Col xs={12} md={6} className="about-rooms-icon gsap-text text-center">
            <ul>
              <li>🚗 Free Parking</li>
              <li>📶 Free Wifi</li>
              <li>🏋️ Free Gym Access</li>
              <li>⚡ Electric Car Charging</li>
              <li>📺 Freeview TV</li>
              <li>❄️ Air Conditioning</li>
            </ul>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default AboutRooms;
