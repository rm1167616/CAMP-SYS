import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import hotle1 from '../images/hotle1.jpg';
import hotle2 from '../images/hotle2.avif';
import hotle3 from '../images/hotle3.jpg';
import hotle4 from '../images/hotle4.webp';
import hotle6 from '../images/hotle6.jpg';
import Header from '../shared/header/header'; 
import Footer from '../shared/footer/footer'; 

const HomePage = () => {
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);

  useEffect(() => {
    // Show benefits section after a delay
    setTimeout(() => setBenefitsVisible(true), 500);

    // Reveal each benefit one after another
    if (benefitsVisible) {
      const interval = setInterval(() => {
        setActiveBenefitIndex(prevIndex => prevIndex + 1);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [benefitsVisible]);

  return (
    <>
      <Header />
     

      {/* Carousel Section */}
      <Carousel controls={false} indicators={false} interval={4000} >
        <Carousel.Item>
          <img className="d-block w-100" src={hotle1} alt="Hotel 1" />
          <Carousel.Caption>
            <h2>Stay With Us</h2>
            <Button variant="warning" size="lg">
              Check Availability
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hotle2} alt="Hotel 2" />
          <Carousel.Caption>
            <h2>Stay With Us</h2>
            <Button variant="warning" size="lg">
              Check Availability
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hotle3} alt="Hotel 3" />
          <Carousel.Caption>
            <h2>Stay With Us</h2>
            <Button variant="warning" size="lg">
              Check Availability
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hotle4} alt="Hotel 4" />
          <Carousel.Caption>
            <h2>Stay With Us</h2>
            <Button variant="warning" size="lg">
              Check Availability
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hotle6} alt="Hotel 6" />
          <Carousel.Caption>
            <h2>Stay With Us</h2>
            <Button variant="warning" size="lg">
              Check Availability
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



      {/* Why Book Direct and Benefits Section */}
{/* Why Book Direct and Benefits Section */}
<Container fluid className="d-flex align-items-center justify-content-center my-5">
        <Row className="w-100">
          <Col xs={12} md={6} className="text-left py-5 bg-dark text-light ">
            <h3>Why Book Direct?</h3>
            <p>Choose Direct Rate when booking your room</p>
            <Button variant="warning" size="lg">
              Check Availability
            </Button>
          </Col>
          <Col
            xs={12} md={6} 
            className={`text-center benefits-section py-5 bg-dark text-light ${benefitsVisible ? 'visible' : ''}`}
          >
            <div className="benefits">
              {["✔ Best Rate Guarantee", "✔ £5 off Best Available Rate", "✔ Free Cancellation"].map((benefit, index) => (
                <p key={index} className={activeBenefitIndex >= index ? 'visible' : ''}>{benefit}</p>
              ))}
            </div>
          </Col>
        </Row>
      </Container>



      {/* About Our Rooms Section */}
      <Container fluid className="about-rooms-section bg-light text-center py-5">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h2>About Our Rooms</h2>
            <p>
              Years of hospitality experience have gone into fine-tuning our rooms to guarantee a great stay.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <ul className="list-unstyled custom-list">
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


      <Footer />
    </>

   
  );
};

export default HomePage;
