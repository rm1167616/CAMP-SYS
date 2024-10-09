import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal, Form, Carousel } from 'react-bootstrap';
import "../../pages/css/offers.css";

const Offers = () => {
    // State to manage the list of offers
    const [offers, setOffers] = useState([
        {
            id: 1,
            title: "Summer Sale",
            description: "Get 20% off on all items during the summer.",
            discount: "20%",
            images: [] // Images will be uploaded by the user
        },
        {
            id: 2,
            title: "Winter Clearance",
            description: "50% off on selected items.",
            discount: "50%",
            images: []
        },
        {
            id: 3,
            title: "Spring Special",
            description: "Buy one, get one free on all spring clothing.",
            discount: "Buy 1 Get 1 Free",
            images: []
        }
    ]);

    // Modal visibility state
    const [show, setShow] = useState(false);
    // State to track the current offer being edited or added
    const [currentOffer, setCurrentOffer] = useState({ id: null, title: '', description: '', discount: '', images: [] });
    // State to toggle between Add and Edit modes
    const [isEditMode, setIsEditMode] = useState(false);

    // Close the modal
    const handleClose = () => setShow(false);

    // Open the modal for adding or editing offers
    const handleShow = (offer = { id: null, title: '', description: '', discount: '', images: [] }, editMode = false) => {
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

    // Handle file uploads (max 8 images) and convert them to Base64 format
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files).slice(0, 100); // Limit to 8 files
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
            <h1 className="text-center mb-4 mt-4">Current Offers</h1>
            {/* Button to add a new offer */}
            <Button
                variant="success"
                className="add-custom-btn"
                onClick={() => handleShow()}>
                Add Offer
            </Button>

            {/* Container for all offer cards */}
            <div className="offer-card-container">
                <Row className="justify-content-center mt-3">
                    {offers.length > 0 ? (
                        offers.map((offer) => (
                            <Col md={12} key={offer.id} className="mb-4 animated-card">
                                <Card className="offer-card">
                                    {/* Image carousel for each offer */}
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
                                            <strong>Discount:</strong> {offer.discount}
                                        </Card.Text>
                                        <div className="button-group">
                                            {/* Edit and Delete buttons for each offer */}
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

            {/* Modal for adding/editing offers */}
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
