import React, { useEffect } from 'react';
import { Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import '../css/animation.css'; // Import your CSS for animations
import '../css/Header.css';
import AnimateOnScroll from '../js/AnimateOnScroll'; 
import { Link } from 'react-router-dom';

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
      <div className='PartOne'>
        <div className='MINU'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="/" className="LogoBrand" data-animation ="slideInDown" style={{animationDelay: "0.2s"}}></a>
        <a className='SignIN text-warning' as={Link} href="/login" data-animation ="slideInLeft" style={{animationDelay: "0.2s"}}>Login</a>
      </div>
      <Container fluid>
        <Nav className="justify-content-space-between bg py-3 Parent" style={{backgroundColor:'#4a5a3e'}}>
          
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
            <Nav.Link href="#holidays"className="text-warning" data-animation="slideInDown" style={{animationDelay: "0.8s"}}>
              Holidays
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact" className="text-warning" as={Link} to="/contact" data-animation="slideInDown" style={{animationDelay: "0.9s"}}>
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Link as={Link} to="/offers" className="text-warning" data-animation="slideInDown" style={{animationDelay: "0.8s"}}>
              Offers
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-warning" data-animation="slideInDown" style={{animationDelay: "0.8s"}}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/Rooms" className="text-warning" data-animation="slideInDown" style={{animationDelay: "0.8s"}}>
              RoomsAvailable
            </Nav.Link>
          </div>
        </Nav>
      </Container>
    </header>
  );
};

export default Header;
