import React, { useRef } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import hotle1 from '../images/hotle1.jpg';
import hotle2 from '../images/hotle2.avif';
import hotle4 from '../images/hotle4.webp';
import hotle6 from '../images/hotle6.jpg';
import hotle7 from '../images/hotle7.webp';
import hotle8 from '../images/hotle8.webp';
import hotle9 from '../images/hotle9.jpg';
import hotle10 from '../images/hotle10.jpg';
import '../homeused/cards.css';

const RoomCards = () => {
  const roomCardsRef = useRef([]);

  return (
    <>
      {/* Centered Heading */}
      <h1 className="room-title">About Rooms</h1>

      <Row className="justify-content-center room-cards-container">
        {[hotle1, hotle2, hotle10, hotle7, hotle6, hotle9, hotle10, hotle8].map((image, idx) => (
          <Col xs={12} md={5} className="my-3 card-column" key={idx}>
            <Card className="room-card wow fadeInUp" ref={(el) => (roomCardsRef.current[idx] = el)} data-wow-duration="1s">
              <Card.Img variant="top" src={image} className="card-image" />
              <Card.Body>
                <Card.Title className="card-title">Cosy Room {idx + 1}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default RoomCards;
