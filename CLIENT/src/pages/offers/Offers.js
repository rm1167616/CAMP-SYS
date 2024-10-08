import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal, Form } from 'react-bootstrap';
import "../../pages/css/offers.css";

const Offers = () => {
    const [offers, setOffers] = useState([
        {
            id: 1,
            title: "Summer Sale",
            description: "Get 20% off on all items during the summer.",
            discount: "20%",
            image: "https://via.placeholder.com/120" // Placeholder image
        },
        {
            id: 2,
            title: "Winter Clearance",
            description: "50% off on selected items.",
            discount: "50%",
            image: "https://via.placeholder.com/120"
        },
        {
            id: 3,
            title: "Spring Special",
            description: "Buy one, get one free on all spring clothing.",
            discount: "Buy 1 Get 1 Free",
            image: "https://via.placeholder.com/120"
        }
    ]);

    const [show, setShow] = useState(false);
    const [currentOffer, setCurrentOffer] = useState({ id: null, title: '', description: '', discount: '', image: '' });
    const [isEditMode, setIsEditMode] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (offer = { id: null, title: '', description: '', discount: '', image: '' }, editMode = false) => {
        setCurrentOffer(offer);
        setIsEditMode(editMode);
        setShow(true);
    };

    const handleSave = () => {
        if (isEditMode) {
            setOffers(offers.map((offer) => (offer.id === currentOffer.id ? currentOffer : offer)));
        } else {
            setOffers([...offers, { ...currentOffer, id: offers.length + 1 }]);
        }
        setShow(false);
    };

    const handleDelete = (id) => {
        setOffers(offers.filter((offer) => offer.id !== id));
    };

    return (
        <div className="offers-container">
            <h1 className="text-center mb-4 mt-4">Current Offers</h1>
            <Row className="mt-3">
    {offers.length > 0 ? (
        offers.map((offer) => (
            <Col md={12} key={offer.id} className="mb-4 animated-card">
                <Card className="offer-card">
                    <Card.Img variant="top" src={offer.image} alt={offer.title} />
                    <Card.Body className="card-content">
                        <Card.Title>{offer.title}</Card.Title>
                        <Card.Text>
                            <strong>Description:</strong> {offer.description}
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
                            <Button
                                variant="success"
                                className="custom-btn"
                                onClick={() => handleShow()}
                            >
                                Add Offer
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


            {/* Modal for Adding/Editing Offers */}
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
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter image URL"
                                value={currentOffer.image}
                                onChange={(e) =>
                                    setCurrentOffer({ ...currentOffer, image: e.target.value })
                                }
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
