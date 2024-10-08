import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/footer.css'; // Custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faTripadvisor, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import specific icons
import gsap from 'gsap';

const Footer = () => {
  const footerRef = useRef(null);
  const itemsRef = useRef([]);
  const ComeFromRightLogo = useRef(null);
  const ComeFromLeft = useRef(null);
  const ComeFromRightFooter = useRef(null);
  const ComeFromLeftFooter = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const footerRect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if footer is in view
      if (footerRect.top <= windowHeight) {
        gsap.fromTo(
          ComeFromRightLogo.current,
          { x: -100, opacity: 0 }, // Start state: moved right and invisible
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          }
        );
        gsap.fromTo(
          ComeFromRightFooter.current,
          { x: -100, opacity: 0 }, // Start state: moved right and invisible
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          }
        );
        gsap.fromTo(
          ComeFromLeft.current,
          { x: 100, opacity: 0 }, // Start state: moved right and invisible
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          }
        );
        gsap.fromTo(
          ComeFromLeftFooter.current,
          { x: 100, opacity: 0 }, // Start state: moved right and invisible
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          }
        );
        gsap.fromTo(
          itemsRef.current,
          { opacity: 0, y: 20 }, // Start state
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1, // Delay between each item animation
            ease: "power2.out",
          }
        );
        // Remove event listener after animation
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="footer bg-dark text-light">
      <Container className='ConatainreFooter py-3'>
        <Row className="justify-content-between">
          <Col xs={12} md={4} className="text-center text-md-left ">
            <div className='ConLogo' ref={ComeFromRightLogo} style={{ opacity: 0 }}>
              <img
                src="https://i.pinimg.com/736x/48/b0/87/48b087b50ead6993a8113c440d640db4.jpg"
                alt="Camp Sys Logo"
                className="footer-logo"
              />
              <p>WebBugs</p>
            </div>
          </Col>

          <Col ref={footerRef} xs={12} md={4} className="text-center">
            <div className="list-unstyled list-unstyledOptions">
              {["Contact", "T & Cs", "Cookie Policy", "Privacy Policy", "Gift Vouchers", "Careers"].map((item, index) => (
                <div
                  key={index}
                  ref={el => (itemsRef.current[index] = el)} // Store references to items
                  style={ {opacity: 0} } // Initial opacity
                >
                  <a href='#'>{item}</a>
                </div>
              ))}
            </div>
          </Col>

          <Col xs={12} md={4} className="text-center text-md-right ParentContactUs">
            <div className='ContactUs' ref={ComeFromLeft} style={{ opacity: 0 }}>
              <p>02084618600</p>
              <p>enquiries@campsys.com</p>
            </div>
          </Col>
        </Row>
      </Container>

      <div className='EndFooter'>
        <div className="ConEndFooter">
          <p ref={ComeFromRightFooter} style={{ opacity: 0 }}>&copy; 2024 Camp Sys. Created With 🤍 By <span className='Webbugs'>WebBugs</span></p>
          <ul className="list-inline" ref={ComeFromLeftFooter} style={{ opacity: 0 }}>
            <li className="list-inline-item">
              <a href="#facebook" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#twitter" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#linkedin" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#instagram" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#tripadvisor" className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
