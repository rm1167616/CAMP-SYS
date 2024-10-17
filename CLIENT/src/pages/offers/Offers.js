import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal, Form, Carousel } from 'react-bootstrap';
import "../../pages/css/offers.css";
import hotle4 from '../images/hotle4.webp';
import hotle6 from '../images/hotle6.jpg';
import hotle7 from '../images/hotle7.webp';
import hotle8 from '../images/hotle8.webp';
import hotle9 from '../images/hotle9.jpg';
import hotle10 from '../images/hotle10.jpg';

const getHomePageOffer = () => {
    // If it returns a single object, wrap it in an array
    return [
      {
        title: "Special Offer",
        description: "Get 20% off on your next stay",
        discount: "20% Off",
        images: [hotle6],  // Example image
      }
    ];
  };
  
const Offers = () => {
    // State to manage the list of hotel room offers
    const [offers, setOffers] = useState([
        {
            id: 1,
            title: "Deluxe Room Special",
            description: "Enjoy a luxurious stay in our deluxe room with complimentary breakfast.",
            discount: "15% off",
            roomType: "Deluxe Room",
            features: "King-sized bed, Mini-bar, Ocean view",
            images: []
        },
        {
            id: 2,
            title: "Family Suite Offer",
            description: "Book our family suite for a comfortable stay with up to 4 guests.",
            discount: "20% off",
            roomType: "Family Suite",
            features: "2 Bedrooms, Kitchenette, Balcony",
            images: []
        },
        {
            id: 3,
            title: "Weekend Getaway",
            description: "Stay 2 nights and get 1 night free in any of our standard rooms.",
            discount: "Buy 2 Get 1 Free",
            roomType: "Standard Room",
            features: "Free Wi-Fi, Coffee maker, Garden view",
            images: []
        }
    ]);

    // Modal visibility state
    const [show, setShow] = useState(false);
    // State to track the current offer being edited or added
    const [currentOffer, setCurrentOffer] = useState({ id: null, title: '', description: '', discount: '', roomType: '', features: '', images: [] });
    // State to toggle between Add and Edit modes
    const [isEditMode, setIsEditMode] = useState(false);

    // Close the modal
    const handleClose = () => setShow(false);

    // Open the modal for adding or editing offers
    const handleShow = (offer = { id: null, title: '', description: '', discount: '', roomType: '', features: '', images: [] }, editMode = false) => {
        setCurrentOffer(offer);
        setIsEditMode(editMode);
        setShow(true);
    };

    // Save the new or updated offer
    const handleSave = () => {
        if (isEditMode) {
            setOffers(offers.map((offer) => (offer.id === currentOffer.id ? currentOffer : offer)));
        } else {
            setOffers([...offers, { ...currentOffer, id: offers.length + 1 }]);
        }
        setShow(false);
    };

    // Delete an offer from the list
    const handleDelete = (id) => {
        setOffers(offers.filter((offer) => offer.id !== id));
    };

    // Handle file uploads and convert them to Base64 format
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files).slice(0, 8); // Limit to 8 images
        const promises = files.map((file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve(reader.result); // Convert file to Base64 URL
                };
                reader.onerror = reject;
                reader.readAsDataURL(file); // Read file as Data URL
            });
        });

        Promise.all(promises)
            .then((base64Images) => {
                setCurrentOffer({ ...currentOffer, images: base64Images });
            })
            .catch((error) => {
                console.error("Error reading files: ", error);
            });
    };

    return (
        <div className="offers-container">
            <h1 className="text-center mb-4 mt-4" >Hotel Room Offers</h1>
            <Button
                variant="success"
                className="add-custom-btn"
                onClick={() => handleShow()}>
                Add Offer
            </Button>

            <div className="offer-card-container">
                <Row className="justify-content-center mt-3">
                    {offers.length > 0 ? (
                        offers.map((offer) => (
                            <Col md={12} key={offer.id} className="mb-4 animated-card">
                                <Card className="offer-card">
                                    {offer.images.length > 0 ? (
                                        <Carousel>
                                            {offer.images.map((image, index) => (
                                                <Carousel.Item key={index}>
                                                    <img
                                                        className="fixed-size-image"
                                                        src={image}
                                                        alt={`Offer Image ${index + 1}`}
                                                    />
                                                </Carousel.Item>
                                            ))}
                                        </Carousel>
                                    ) : (
                                        <img
                                            className="fixed-size-image"
                                            src="https://via.placeholder.com/400x300"
                                            alt="Placeholder Image"
                                        />
                                    )}
                                    <Card.Body className="card-content">
                                        <Card.Title>{offer.title}</Card.Title>
                                        <Card.Text>
                                            <strong>Description:</strong> {offer.description}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Room Type:</strong> {offer.roomType}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Features:</strong> {offer.features}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Discount:</strong> {offer.discount}
                                        </Card.Text>
                                        <div className="button-group">
                                            <Button
                                                variant="info"
                                                className="me-2 custom-btn"
                                                onClick={() => handleShow(offer, true)}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="danger"
                                                className="me-2 custom-btn"
                                                onClick={() => handleDelete(offer.id)}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <p>No offers available</p>
                    )}
                </Row>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditMode ? 'Edit Offer' : 'Add Offer'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter offer title"
                                value={currentOffer.title}
                                onChange={(e) =>
                                    setCurrentOffer({ ...currentOffer, title: e.target.value })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter offer description"
                                value={currentOffer.description}
                                onChange={(e) =>
                                    setCurrentOffer({ ...currentOffer, description: e.target.value })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Room Type</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter room type"
                                value={currentOffer.roomType}
                                onChange={(e) =>
                                    setCurrentOffer({ ...currentOffer, roomType: e.target.value })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Features</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter room features"
                                value={currentOffer.features}
                                onChange={(e) =>
                                    setCurrentOffer({ ...currentOffer, features: e.target.value })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Discount</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter discount (e.g., 20%)"
                                value={currentOffer.discount}
                                onChange={(e) =>
                                    setCurrentOffer({ ...currentOffer, discount: e.target.value })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Upload Images</Form.Label>
                            <Form.Control
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" className="custom-btn" onClick={handleSave}>
                        {isEditMode ? 'Save Changes' : 'Add Offer'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Offers;
