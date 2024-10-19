import React from 'react';
import { Carousel, Button ,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import hotle4 from '../images/hotle4.webp';
import hotle6 from '../images/hotle6.jpg';
import hotle7 from '../images/hotle7.webp';
import hotle8 from '../images/hotle8.webp';
import hotle9 from '../images/hotle9.jpg';
import hotle10 from '../images/hotle10.jpg';
import hotle0 from '../images/1.jpg';
import hotle00 from '../images/2.jpg';
import hotle000 from '../images/3.jpg';
import hotle0000 from '../images/4.jpg';
import hotle00000 from '../images/5.jpg';
import hotle000000 from '../images/dahab-background.jpg';
// Import the RoomCards component
import RoomCards from '../homeused/cards';
import RoomFeatures from '../homeused/roomfeature';
import AboutRoom from '../homeused/AboutRoom';


const HomePage = () => {
 

  return (
    <>
      {/* Carousel Section */}
      <div className="carousel-section" style={{ marginBottom: '30px' }}>
        <Carousel controls={false} indicators={false} interval={2000}>
          {[hotle0, hotle00, hotle000, hotle0000, hotle00000, hotle000000].map((image, idx) => (
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



      <div>
            {/* Section 1 */}
            <section className="testimonial-section">
                <ul>
                    <div>
                        <div className="testimonial-item">
                            <li>
                                <div className="testimonial-content">
                                    <h5>J Andrews</h5>
                                    <h2>"Our newly refurbished room was fantastic with beautiful views."</h2>
                                </div>
                            </li>
                        </div>
                    </div>
                </ul>
            </section>

            {/* Section 2 */}
            <section className="may-also-like-section">
                <Container>
                    <div className="text-center">
                        <h2>You May Also Like</h2>
                        <div className="separator"></div>
                    </div>
                </Container>
            </section>

            {/* Section 3 */}
            <section className="recommendations-section">
                <ul className="recommendations-list">
                    <li className="recommendation-card">
                        <div data-aos="fade-up" data-aos-delay="50">
                            <a href="https://bromleycourthotel.co.uk/dine/">
                                <div className="card-image dine"></div>
                                <div>
                                    <h4>Dine</h4>
                                    <p>The hotel has a range of dining options...</p>
                                </div>
                            </a>
                        </div>
                    </li>

                    <li className="recommendation-card">
                        <div data-aos="fade-up" data-aos-delay="100">
                            <a href="https://bromleycourthotel.co.uk/meetings/">
                                <div className="card-image meetings"></div>
                                <div>
                                    <h4>Meetings</h4>
                                    <p>From private dining to corporate events...</p>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </section>
        </div>

    </>
  );
};

export default HomePage;
