import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Carousel } from 'react-bootstrap';
import About1 from '../../pages/About/images/hotel.jpg';
import About2 from '../../pages/About/images/Room1.jpg';
import About3 from '../../pages/About/images/friends.jpg';
import About4 from '../../pages/About/images/special-room.jpg';
import '../../pages/css/about.css';

const About = () => {
    return (
        <div>
            {/* Image Slider (Carousel) */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={About1}
                        alt="Hotel Image 1"
                        style={{ maxHeight: '700px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={About2}
                        alt="Hotel Image 2"
                        style={{ maxHeight: '700px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={About3}
                        alt="Hotel Image 3"
                        style={{ maxHeight: '700px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={About4}
                        alt="Hotel Image 3"
                        style={{ maxHeight: '700px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
            </Carousel>

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
            <div style={{ paddingTop: '6px' }}>
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