import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/footer.css'; // Custom CSS for styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <Container>
        <Row className="justify-content-between">
          <Col xs={12} md={4} className="text-center text-md-left mb-3">
            <img src="/path-to-logo" alt="Camp Sys Logo" className="footer-logo mb-3" />
            <p>&copy; 2024 Camp Sys. All Rights Reserved.</p>
          </Col>
          <Col xs={12} md={4} className="text-center mb-3">
            <ul className="list-unstyled">
              <li>Contact</li>
              <li>T & Cs</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
              <li>Gift Vouchers</li>
              <li>Careers</li>
            </ul>
          </Col>
          <Col xs={12} md={4} className="text-center text-md-right mb-3">
            <p>02084618600</p>
            <p>enquiries@campsys.com</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#facebook" className="social-icon">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#twitter" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#linkedin" className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#instagram" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#tripadvisor" className="social-icon">
                  <i className="fab fa-tripadvisor"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
