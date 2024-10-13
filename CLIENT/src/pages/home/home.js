import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
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
import AboutRoom from '../homeused/AboutRoom';
import OfferCard from '../offers/Offers'; // Adjust path as necessary

const HomePage = () => {
  // Example offers data
  const offers = [
    {
      id: 1,
      title: "Summer Sale",
      description: "Get 20% off on all items during the summer.",
      discount: "20%",
      images: ["https://via.placeholder.com/400x300"] // Replace with actual image URLs
    },
    // Add other offers as needed, but only show one
  ];

  const handleEdit = (offer) => {
    // Implement your edit logic here
  };

  const handleDelete = (id) => {
    // Implement your delete logic here
  };

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

      {/* Room Features Section */}
      <div style={{ backgroundColor: '#4a5a3e', padding: '50px 0' }}>
        <RoomFeatures />
      </div>

      {/* About Room Section */}
      <div className="room-cards-section">
        <AboutRoom />
      </div>

    </>
  );
};

export default HomePage;
