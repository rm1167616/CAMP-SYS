import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WOW } from 'wowjs';
import { useSwipeable } from 'react-swipeable';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/main.css';
import hotle1 from '../images/hotle1.jpg';
import hotle2 from '../images/hotle2.avif';
import hotle4 from '../images/hotle4.webp';
import hotle6 from '../images/hotle6.jpg';
import hotle7 from '../images/hotle7.webp';
import hotle8 from '../images/hotle8.webp';
import hotle9 from '../images/hotle9.jpg';
import hotle10 from '../images/hotle10.jpg';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const styles = {
  iconList: {
    listStyle: 'none',
    color: '#B49A68', // Golden color
  },
  iconItem: {
    marginBottom: '10px',
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '10px',
    fontSize: '1.5rem',
  },
};

const NewRoomFeatureSection = () => {
  return (
    <Container fluid className="room-features-section bg-white text-center" style={{margin_top:'50px'}} >
      <Row className="justify-content-center" >
        <Col xs={12} md={6} className="text-left" >
        <h6 className="text-dark text-left" >STAY WITH US</h6>
          <h2 className="text-dark text-center">Why Choose Our Rooms</h2>
          <p className="text-muted">
          Years of hospitality experience have gone into fine-tuning our rooms to guarantee a great stay.
          <p className="text-muted">
          We keep things simple for you by making sure everything you need is included as standard.</p> 
          <p className="text-muted">
           High-speed internet access and a desk in your room helps to make life easier when staying over as a business guest or adjoining rooms give peace of mind for families and cots are available on request.</p>

Just one and a half miles from the centre of Bromley with its bars, restaurants, The Glades Shopping Centre and train station.</p>
<p className="text-muted">
Bromley South Railway Station offers regular fast trains to London’s Victoria Station in less than 20 minutes which means that all the Central London attractions and West End theatres are within very easy reach.</p>
<p className="text-muted">
There is public transport available to Greenwich Village, the Royal Observatory, Cutty Sark and O2 Arena. For Canary Wharf, Excel Exhibition Centre and the City of London, get on the Docklands Light Railway from Lewisham (2 miles away). Croydon is 6 miles away.

Keep up with your fitness routine when you are away. Our air-conditioned gym room is equipped with weight, rowing and running machines.
          </p>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <ul style={styles.iconList}>
            <li style={styles.iconItem}>
              <span style={styles.icon}>🚗</span> <span>Free Parking</span>
            </li>
            <li style={styles.iconItem}>
              <span style={styles.icon}>📶</span> <span>Free WiFi</span>
            </li>
            <li style={styles.iconItem}>
              <span style={styles.icon}>🏋️‍♂️</span> <span>Free use of the Gym Facilities for Residents</span>
            </li>
            <li style={styles.iconItem}>
              <span style={styles.icon}>⚡</span> <span>Electric Car Charging Facilities</span>
            </li>
            <li style={styles.iconItem}>
              <span style={styles.icon}>📺</span> <span>Freeview TV</span>
            </li>
            <li style={styles.iconItem}>
              <span style={styles.icon}>❄️</span> <span>Air Conditioning</span>
            </li>
            <li style={styles.iconItem}>
              <span style={styles.icon}>📱</span> <span>Smart TVs in every room</span>
            </li>
            <li style={styles.iconItem}>
              <span style={styles.icon}>🛏️</span> <span>Comfortable, luxurious bedding</span>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

const HomePage = () => {
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const [swipedUp, setSwipedUp] = useState(false);
  const benefitsRef = useRef([]);
  const roomCardsRef = useRef([]);

  useEffect(() => {
    new WOW().init();

    if (benefitsVisible) {
      gsap.fromTo(
        benefitsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    }

    const handleScroll = () => {
      if (window.scrollY > 200) {
        gsap.fromTo(
          roomCardsRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
          }
        );
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [benefitsVisible]);

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => setSwipedUp(true),
    onSwipedDown: () => setSwipedUp(false),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  useEffect(() => {
    setTimeout(() => setBenefitsVisible(true), 500);
  }, []);

  const BenefitSection = () => {
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
      <Container fluid className="benefit-section text-center" >
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="benefit-text gsap-text text-left">
            <h2>Why Book Direct?</h2>
            <p>Choose Direct Rate when booking your room to enjoy special benefits.</p>
            <Button className="check-availability-btn" variant='Warning'>Check Availability</Button>
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

  return (
    <>
      <Carousel controls={false} indicators={false} interval={4000}>
        {[hotle4, hotle6, hotle7, hotle8, hotle9, hotle10].map((image, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100" src={image} alt={`Hotel ${idx + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      <BenefitSection />

      <Container fluid className="about-rooms-section bg-white text-center">
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="about-rooms-gsap-text gsap-text text-left">
            <h2>About Our Rooms</h2>
            <p>Years of hospitality experience have gone into fine-tuning our rooms to guarantee a great stay.</p>
            <Button className="check-availability-btn" variant='Warning'>Check Availability</Button>
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

      <Container fluid className={`room-cards ${swipedUp ? 'visible' : 'hidden'}`} {...swipeHandlers} style={{ marginTop: '5px' }}>
        <Row className="justify-content-center">
          <Col xs={12}>
            <h2 className="text-center" variant="warning">About Rooms</h2>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {[hotle1, hotle2, hotle10, hotle7, hotle6, hotle9, hotle10, hotle8].map((image, idx) => (
            <Col xs={12} md={5} className="my-3 mx-3" key={idx}>
              <Card className="room-card wow fadeInUp" ref={(el) => (roomCardsRef.current[idx] = el)} data-wow-duration="1s">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Cosy Room {idx + 1}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <NewRoomFeatureSection />
    </>
  );
};

export default HomePage;
