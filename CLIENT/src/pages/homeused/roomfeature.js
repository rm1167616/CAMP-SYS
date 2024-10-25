import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faWifi, faDumbbell, faChargingStation, faTv, faSnowflake, faMobileAlt, faBed } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import '../homeused/roomfeature.css'; // Import your CSS file

const RoomFeatures = () => {
  const leftSectionRef = useRef(null);
  const iconListRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the left section
    gsap.fromTo(
      leftSectionRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
    );

    // GSAP stagger animation for the right section <li> items
    const iconItems = iconListRef.current.querySelectorAll('.icon-item');
    gsap.fromTo(
      iconItems,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2, // Delay between each item
        duration: 0.8,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div className="room-features-section">
      <Container fluid>
        <Row className="justify-content-center">
          {/* Left Section - Centered Vertically and Horizontally */}
          <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
            <div ref={leftSectionRef} className="text-left" style={{marginLeft:'20px'}}>
              <h6>STAY WITH US</h6>
              <h2>About Our Rooms</h2>
              <p>
                Years of hospitality experience have gone into fine-tuning our rooms to guarantee a great stay. We keep things simple for you by making sure everything you need is included as standard.
              </p>
              <p>
                High-speed internet access and a desk in your room helps to make life easier when staying over as a business guest or adjoining rooms give peace of mind for families.
              </p>
              <p>
                Just one and a half miles from the center of Bromley with its bars, restaurants, and shopping centers. Bromley South Railway Station offers regular trains to London’s Victoria Station.
              </p>
              <p>
                Public transport is available to Greenwich Village, the Royal Observatory, Cutty Sark, and O2 Arena.
              </p>
            </div>
          </Col>

          {/* Right Section (Icons) - Centered Vertically */}
          <Col xs={12} md={6} className="text-left d-flex align-items-center">
            <ul ref={iconListRef} className="icon-list">
              <li className="icon-item">
                <FontAwesomeIcon icon={faCar} className="icon" /> 
                <span className="text">Free Parking</span>
              </li>
              <li className="icon-item">
                <FontAwesomeIcon icon={faWifi} className="icon" /> 
                <span className="text">Free WiFi</span>
              </li>
              <li className="icon-item">
                <FontAwesomeIcon icon={faDumbbell} className="icon" /> 
                <span className="text">Free use of Gym Facilities</span>
              </li>
              <li className="icon-item">
                <FontAwesomeIcon icon={faChargingStation} className="icon" /> 
                <span className="text">Electric Car Charging</span>
              </li>
              <li className="icon-item">
                <FontAwesomeIcon icon={faTv} className="icon" /> 
                <span className="text">Freeview TV</span>
              </li>
              <li className="icon-item">
                <FontAwesomeIcon icon={faSnowflake} className="icon" /> 
                <span className="text">Air Conditioning</span>
              </li>
              <li className="icon-item">
                <FontAwesomeIcon icon={faMobileAlt} className="icon" /> 
                <span className="text">Smart TVs</span>
              </li>
              <li className="icon-item">
                <FontAwesomeIcon icon={faBed} className="icon" /> 
                <span className="text">Luxurious Bedding</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RoomFeatures;
