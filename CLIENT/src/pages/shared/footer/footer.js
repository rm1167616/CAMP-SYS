import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/footer.css'; // Custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <Container className='ConatainreFooter py-3'>
        <Row className="justify-content-between">
          <Col xs={12} md={4} className="text-center text-md-left ">
            <div className='ConLogo'>
              <img src="https://i.pinimg.com/736x/48/b0/87/48b087b50ead6993a8113c440d640db4.jpg" alt="Camp Sys Logo" className="footer-logo" />
              <p>WebBugs</p>
            </div>

          </Col>
          <Col xs={12} md={4} className="text-center">
            <div className="list-unstyled list-unstyledOptions">
              <a href='#'>Contact</a>
              <a href='#'>T & Cs</a>
              <a href='#'>Cookie Policy</a>
              <a href='#'>Privacy Policy</a>
              <a href='#'>Gift Vouchers</a>
              <a href='#'>Careers</a>
            </div>
          </Col>
          <Col xs={12} md={4} className="text-center text-md-right ParentContactUs">
            <div className='ContactUs'>
              <p>02084618600</p>
              <p>enquiries@campsys.com</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='EndFooter'>
        <div className="ConEndFooter">
        <p>&copy; 2024 Camp Sys. Creat With 🤍 By <span className='Webbugs'>WebBugs</span></p>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
