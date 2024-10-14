import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../../pages/css/about.css';
import hotelImage from '../../pages/About/images/hotel.jpg';

const About = () => {
    return (
        <div>
            {/* Top Image (consistent with first page) */}
            <img 
                className='hotel-image'
                src={hotelImage} 
                alt="Hotel Background"
                style={{ width: '100%', maxHeight: '700px' }} 
            />

            {/* Sticky Navbar directly below image */}
            <Navbar expand="lg" variant="dark" className="navbar-below-header shadow-lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav className="mx-auto">
                            <Nav.Link href="#information">Information</Nav.Link>
                            <Nav.Link href="#amenities">Amenities</Nav.Link>
                            <Nav.Link href="#policies">Policies</Nav.Link>
                            <Nav.Link href="#terms">Terms & Conditions</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Consistent Header below Navbar */}
            <header className="page-header">
                <Container>
                    <h1 className="header-title">BLACK PRINCE HOTEL</h1>
                </Container>
            </header>

            {/* Main Content Sections */}
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
