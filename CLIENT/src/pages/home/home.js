import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import hotle4 from '../images/hotle4.webp';
import hotle6 from '../images/hotle6.jpg';
import hotle7 from '../images/hotle7.webp';
import hotle8 from '../images/hotle8.webp';
import hotle9 from '../images/hotle9.jpg';
import hotle10 from '../images/hotle10.jpg';

// Import the RoomCards component
import RoomCards from '../homeused/cards';
import RoomFeatures from '../homeused/roomfeature';

const HomePage = () => {
  return (
    <>
      {/* Carousel Section */}
      <div className="carousel-section" style={{ marginBottom: '30px' }}>
        <Carousel controls={false} indicators={false} interval={2000}>
          {[hotle4, hotle6, hotle7, hotle8, hotle9, hotle10].map((image, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100 carousel-image"
                src={image}
                alt={`Hotel ${idx + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Room Cards Section */}
      <div className="room-cards-section">
        <RoomCards />
      </div>
      <div>
      {/* Other sections of the homepage */}
      <div style={{ backgroundColor: '#4a5a3e', padding: '50px 0' }}>
        <RoomFeatures />
      </div>
      {/* Other sections of the homepage */}
    </div>
    </>
  );
};

export default HomePage;
