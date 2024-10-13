import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../../pages/css/about.css';

const About = () => {
    return (
        <div>
            {/* Image Placeholder at the Top
            <img 
                src="https://via.placeholder.com/1500x500" 
                alt="Hotel Placeholder"
                style={{ width: '100%', height: 'auto' }} 
            />

            {/* Header */}
            <header className="page-header">
                <Container>
                    <h1 className="header-title">Beverly Hills Plaza Hotel & Spa</h1>
                    <p className="header-subtitle">Luxury Redefined</p>
                </Container>
            </header>
    
            {/* Navbar (below header) */}
            <Navbar bg="dark" expand="lg" variant="dark" className="navbar-below-header shadow-lg">
                <Container>
                    <Navbar.Brand href="#">Hotel Menu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#information">Information</Nav.Link>
                            <Nav.Link href="#amenities">Amenities</Nav.Link>
                            <Nav.Link href="#policies">Policies</Nav.Link>
                            <Nav.Link href="#terms">Terms & Conditions</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
            {/* Page Content */}
            <div style={{ paddingTop: '50px' }}>
                {/* Information Section */}
                <section id="information" className="section-bg-light">
                    <Container>
                        <h2 className="section-title">Information</h2>
                        <p className="section-description">
                            This section contains all the information about the hotel and services...
                        </p>
                    </Container>
                </section>
        
                {/* Amenities Section */}
                <section id="amenities" className="section-bg-dark text-white">
                    <Container>
                        <h2 className="section-title">Amenities</h2>
                        <p className="section-description">
                            Explore the luxurious amenities we offer...
                        </p>
                    </Container>
                </section>
        
                {/* Policies Section */}
                <section id="policies" className="section-bg-light">
                    <Container>
                        <h2 className="section-title">Policies</h2>
                        <p className="section-description">
                            Our hotel policies are in place to ensure the comfort of all our guests...
                        </p>
                    </Container>
                </section>
        
                {/* Terms & Conditions Section */}
                <section id="terms" className="section-bg-dark text-white">
                    <Container>
                        <h2 className="section-title">Terms & Conditions</h2>
                        <p className="section-description">
                            Please read our terms and conditions before booking...
                        </p>
                    </Container>
                </section>
            </div> 
        </div>
    );
};

export default About;
