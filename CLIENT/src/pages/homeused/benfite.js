import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../homeused/benfite.css';

gsap.registerPlugin(ScrollTrigger);

const BenefitPage = () => {
  useEffect(() => {
    gsap.fromTo(
      '.gsap-text',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.benefit-section',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <Container fluid className="benefit-section text-center">
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="benefit-text gsap-text text-left">
          <h2>Why Book Direct?</h2>
          <p>Choose Direct Rate when booking your room to enjoy special benefits.</p>
          <Button className="check-availability-btn" variant="warning">
            Check Availability
          </Button>
          
        </Col>
        <Col xs={12} md={6} className="benefit-icon gsap-text text-right">
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
  );
};

export default BenefitPage;
