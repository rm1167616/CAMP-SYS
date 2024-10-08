import React, { useEffect } from 'react';
import { Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import '../css/animation.css'; // Import your CSS for animations
import '../css/Header.css';
import AnimateOnScroll from '../js/AnimateOnScroll'; 

const Header = () => {

   useEffect(() => {
    const animation = new AnimateOnScroll({ offset: 10 });
    animation.update(); // Initial update to get elements and start animations

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener("load", animation.update.bind(animation), false);
      window.removeEventListener("scroll", animation.verifyElementsInViewport.bind(animation), { passive: true });
      window.removeEventListener("resize", animation.verifyElementsInViewport.bind(animation), { passive: true });
    };
  }, []); // Empty dependency array to run only on mount and unmount

  
  return (
    <header>
      <Container fluid>
        <Nav className="justify-content-space-between bg-dark py-3 Parent">
          <a href="/" className="LogoBrand" data-animation ="slideInRight" style={{animationDelay: "0.2s"}}></a>
          <div className='Items'>
          <Nav.Item>
            <Nav.Link href="#stay" className="text-warning" data-animation ="slideInDown" style={{animationDelay: "0.2s"}}>
              Stay
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#dine" className="text-warning" data-animation="slideInDown" style={{animationDelay: "0.3s"}}>
              Dine
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#weddings" className="text-warning" data-animation="slideInDown" style={{animationDelay: "0.4s"}}>
              Weddings
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#meetings" className="text-warning" data-animation="slideInDown" style={{animationDelay: "0.5s"}}>
              Meetings
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#celebrations" className="text-warning" data-animation="slideInDown" style={{animationDelay: "0.6s"}}>
              Celebrations
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#christmas" className="text-warning" data-animation="slideInDown" style={{animationDelay: "0.7s"}}>
              Christmas 2024
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#events" className="text-warning" data-animation="slideInDown" style={{animationDelay: "0.8s"}}>
              Special Events
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact" className="text-warning" data-animation="slideInDown" style={{animationDelay: "0.9s"}}>
              Contact
            </Nav.Link>
          </Nav.Item>
          </div>
          <a className='SignIN text-warning' data-animation ="slideInLeft" style={{animationDelay: "0.2s"}}>SignIn</a>
        </Nav>
      </Container>
    </header>
  );
};

export default Header;
