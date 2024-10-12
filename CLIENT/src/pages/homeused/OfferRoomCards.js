import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../homeused/OfferRoomCards.css'; // Custom styles

import hotle6 from '../images/hotle6.jpg';
import hotle7 from '../images/hotle7.webp';

const OfferRoomCards = () => {
  return (
    <Container fluid className="offers-section bg-light text-center">
      <h2 className="text-center my-4" style={{ color: '#4a5a3e', fontSize: '2.5rem', textAlign: 'center' }}>Offers</h2>
      
      {/* Cards Row */}
      <Row className="justify-content-center">
        
        {/* Offer 1 */}
        <Col xs={12} md={6} lg={5} className="d-flex justify-content-center mb-4">
          <div className="offer-card" style={{ width: '22rem', height: '300px' }}>
            <div className="offer-card-inner">
              {/* Front Side */}
              <div className="offer-card-front">
                <Card.Img 
                  src={hotle6} 
                  alt="Afternoon Tea Offer" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem', marginTop: '20px' }} 
                />
              </div>
              {/* Back Side */}
              <div className="offer-card-back">
                <Card.Body className="text-center">
                  <Card.Title className="card-title" style={{ color: '#4a5a3e', fontSize: '1.5rem', fontWeight: 'bold' }}>Afternoon Tea Offer</Card.Title>
                  <Card.Text className="card-text" style={{ color: '#b2925a', fontSize: '1.2rem' }}>
                    £16 per person. Available April & May (excluding Bank Holidays). Valid for groups up to 6.
                  </Card.Text>
                  <Button className="book-now-btn" style={{ backgroundColor: '#b2925a', borderColor: '#b2925a' }}>Book Now</Button>
                </Card.Body>
              </div>
            </div>
          </div>
        </Col>

        {/* Offer 2 */}
        <Col xs={12} md={6} lg={5} className="d-flex justify-content-center mb-4">
          <div className="offer-card" style={{ width: '22rem', height: '300px' }}>
            <div className="offer-card-inner">
              {/* Front Side */}
              <div className="offer-card-front">
                <Card.Img 
                  src={hotle7} 
                  alt="Best Rate Offer" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem', marginTop: '20px' }} 
                />
              </div>
              {/* Back Side */}
              <div className="offer-card-back">
                <Card.Body className="text-center">
                  <Card.Title className="card-title" style={{ color: '#4a5a3e', fontSize: '1.5rem', fontWeight: 'bold' }}>The Best Rate is Direct With Us</Card.Title>
                  <Card.Text className="card-text" style={{ color: '#b2925a', fontSize: '1.2rem' }}>
                    To get £5 off our Best Flexible Rate and a £5 Food & Beverage Voucher, book direct with us.
                  </Card.Text>
                  <Button className="book-now-btn" style={{ backgroundColor: '#b2925a', borderColor: '#b2925a' }}>Book Now</Button>
                </Card.Body>
              </div>
            </div>
          </div>
        </Col>
        
      </Row>

      {/* Button Row */}
      <Row className="justify-content-center">
        <Col xs={12} className="d-flex justify-content-center">
          <Button className="book-now-btn" style={{ backgroundColor: '#4a5a3e', borderColor: '#b2925a', width: '200px', marginTop: '20px' }}>Offer</Button>
        </Col>
      </Row>

    </Container>
  );
};

export default OfferRoomCards;
