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
        },
        {
        id: 2,
        title: "Winter Clearance",
        description: "50% off on selected items.",
        discount: "50%",
        },
        {
        id: 3,
        title: "Spring Special",
        description: "Buy one, get one free on all spring clothing.",
        discount: "Buy 1 Get 1 Free",
        },
    ]);
    
    /* show -> This variable manages the visibility of the modal. When show is true, the modal (used for adding or editing offers) is visible. 
    When it's false, the modal is hidden.*/
    const [show, setShow] = useState(false);
    const [currentOffer, setCurrentOffer] = useState({ id: null, title: '', description: '', discount: '' });
    /* isEditMode -> This variable determines whether the modal is in "add" or "edit" mode 
    (true for editing, false for adding).*/
    const [isEditMode, setIsEditMode] = useState(false);

    /* This function simply hides the modal by setting show to false. */
    const handleClose = () => setShow(false);
    const handleShow = (offer = { id: null, title: '', description: '', discount: '' }, editMode = false) => {
        setCurrentOffer(offer);
        setIsEditMode(editMode);
        setShow(true);
    };

    /* This function is responsible for either saving changes to an existing offer or adding a new one */
    /* If isEditMode is true, it updates an existing offer in the list by replacing the one with the same id using setOffers.
    If isEditMode is false, it adds a new offer to the list, giving it a unique id (one more than the current length of the list). */
    const handleSave = () => {
        if (isEditMode) {
        setOffers(offers.map((offer) => (offer.id === currentOffer.id ? currentOffer : offer)));
        } else {
        setOffers([...offers, { ...currentOffer, id: offers.length + 1 }]);
        }
        setShow(false);
    };

    /* This function deletes an offer based on its id. It filters out the offer with the matching id from the offers array and updates the state */
    const handleDelete = (id) => {
        setOffers(offers.filter((offer) => offer.id !== id));
    };

    return (
        <div className="offers-container">
        <h1 className="text-center mb-4">Current Offers</h1>
        <Button variant="success" onClick={() => handleShow()} className="custom-btn">Add Offer</Button>
        <Row className="mt-3">
            {offers.length > 0 ? (
            offers.map((offer) => (
                <Col md={4} key={offer.id} className="mb-4 animated-card">
                <Card className="offer-card">
                    <Card.Body>
                    <Card.Title>{offer.title}</Card.Title>
                    <Card.Text>
                        <strong>Description:</strong> {offer.description}
                    </Card.Text>
                    <Card.Text>
                        <strong>Discount:</strong> {offer.discount}
                    </Card.Text>
                    <Button
                        variant="info"
                        className="me-2 custom-btn"
                        onClick={() => handleShow(offer, true)}
                    >
                        Edit
                    </Button>
                    <Button variant="danger" className="custom-btn" onClick={() => handleDelete(offer.id)}>Delete</Button>
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
