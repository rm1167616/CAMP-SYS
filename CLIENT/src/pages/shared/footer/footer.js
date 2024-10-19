import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/footer.css'; // Custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import specific icons
import gsap from 'gsap';
import hotle8 from '../../images/webugs.png';

const Footer = () => {
  const footerRef = useRef(null);
  const itemsRef = useRef([]);
  const ComeFromRightLogo = useRef(null);
  const ComeFromLeft = useRef(null);
  const ComeFromRightFooter = useRef(null);
  const ComeFromLeftFooter = useRef(null);

  useEffect(() => {
    const animateFooter = () => {
      const footerRect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (footerRect.top <= windowHeight) {
        // Logo Animation
        gsap.fromTo(
          ComeFromRightLogo.current,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
        // Footer text animations
        gsap.fromTo(
          ComeFromRightFooter.current,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
        gsap.fromTo(
          ComeFromLeft.current,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
        gsap.fromTo(
          ComeFromLeftFooter.current,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
        // List Items Animation
        gsap.fromTo(
          itemsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
        );
        // Remove event listener after animation triggers
        window.removeEventListener('scroll', animateFooter);
      }
    };

    window.addEventListener('scroll', animateFooter);

    return () => {
      window.removeEventListener('scroll', animateFooter);
    };
  }, []);

  return (
    <footer className="footer bg-dark text-light">
      <Container className="ConatainreFooter py-3">
        <Row className="justify-content-between">
          <Col xs={12} md={4} className="text-center text-md-left">
            <div className="ConLogo" ref={ComeFromRightLogo} style={{ opacity: 0 }}>
              <img
                src={hotle8} // Correct reference to the imported image
                alt="web bugs Logo"
                className="footer-logo"
              />
              {/* <p>WebBugs</p> */}
            </div>
          </Col>

          <Col ref={footerRef} xs={12} md={4} className="text-center">
            <div className="list-unstyled list-unstyledOptions">
              {["Contact", "T & Cs", "Cookie Policy", "Privacy Policy", "Gift Vouchers", "Careers"].map((item, index) => (
                <div
                  key={index}
                  ref={el => (itemsRef.current[index] = el)} // Store references to items
                  style={{ opacity: 0 }} // Initial opacity
                >
                  <a href="#">{item}</a>
                </div>
              ))}
            </div>
          </Col>

          <Col xs={12} md={4} className="text-center text-md-right ParentContactUs">
            <div className="ContactUs" ref={ComeFromLeft} style={{ opacity: 0 }}>
              <p>
                <a href="tel:+202084618600" className="text-light">02084618600</a>
              </p>
              <p>
                <a href="mailto:enquiries@campsys.com" className="text-light">enquiries@campsys.com</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="EndFooter">
        <div className="ConEndFooter">
          <p ref={ComeFromRightFooter} style={{ opacity: 0 }}>
            &copy; 2024 Camp Sys. Created With 🤍 By <span className="Webbugs">WebBugs</span>
          </p>
          <ul className="list-inline" ref={ComeFromLeftFooter} style={{ opacity: 0 }}>
            {[
              { icon: faFacebook, href: "#facebook" },
              { icon: faTwitter, href: "#twitter" },
              { icon: faLinkedin, href: "#linkedin" },
              { icon: faInstagram, href: "#instagram" },
              { icon: faGithub, href: "#github" }
            ].map((social, index) => (
              <li className="list-inline-item" key={index}>
                <a href={social.href} className="social-icon">
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
