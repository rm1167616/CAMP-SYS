import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Modal, Form, Carousel } from 'react-bootstrap';
import axios from 'axios';
import "../../pages/css/offers.css";

const Offers = () => {
    // State to manage the list of offers
    const [offers, setOffers] = useState([]);
    const [show, setShow] = useState(false);
    const [currentOffer, setCurrentOffer] = useState({ id: null, title: '', description: '', discount: '', images: [] });
    const [isEditMode, setIsEditMode] = useState(false);

    // Fetch offers from the backend when the component mounts
    useEffect(() => {
        axios.get('http://localhost:4000/offers/offers')
            .then(response => {
                setOffers(response.data);
            })
            .catch(error => {
                console.error('Error fetching offers:', error);
            });
    }, []); // Only runs once on component mount

    const handleClose = () => setShow(false);
    const handleShow = (offer = { offerName: '', offerDescreption: '', offerDiscount: '', images: [] }, editMode = false) => {
        setCurrentOffer(offer);
        setIsEditMode(editMode);
        setShow(true);
    };

    // Create or update offer
    const handleSave = () => {
        if (isEditMode) {
            // Fix: Use backticks for template literals
            axios.put(`http://localhost:4000/offers/update/${currentOffer.id}`, currentOffer)
                .then(() => {
                    setOffers(offers.map(offer => (offer.id === currentOffer.id ? currentOffer : offer)));
                    setCurrentOffer({ title: '', description: '', discount: '', images: [] }); // Reset currentOffer
                })
                .catch(error => {
                    console.error('Error updating offer:', error);
                });
        } else {
            axios.post('http://localhost:4000/offers/create', currentOffer)
                .then(response => {
                    setOffers([...offers, response.data]);
                    setCurrentOffer({ offerName: '', offerDescreption: '', offerDiscount: '', images: [] }); // Reset currentOffer
                })
                .catch(error => {
                    console.error('Error adding offer:', error);
                });
        }
        setShow(false);
    };

    // Delete offer
    const handleDelete = (id) => {
        // Fix: Use backticks for template literals
        axios.delete(`http://localhost:4000/offers/delete/${id}`)
            .then(() => {
                setOffers(offers.filter((offer) => offer.id !== id));
            })
            .catch(error => {
                console.error('Error deleting offer:', error);
            });
    };

    // Handle image upload and convert to Base64
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files).slice(0, 8); // Limit to 8 files
        const promises = files.map((file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve(reader.result); // Convert file to Base64 URL
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        });

        Promise.all(promises)
            .then((base64Images) => {
                setCurrentOffer({ ...currentOffer, images: base64Images });
            })
            .catch((error) => {
                console.error('Error reading files:', error);
            });
    };

    return (
        <div className="offers-container">
            <h1 className="text-center mb-4 mt-4">Current Offers</h1>
            <Button variant="success" className="add-custom-btn" onClick={() => handleShow()}>
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
                                                    <img className="fixed-size-image" src={image} alt={`Offer Image ${index + 1}`} /> {/* Fix: Corrected alt attribute */}
                                                </Carousel.Item>
                                            ))}
                                        </Carousel>
                                    ) : (
                                        <img className="fixed-size-image" src="https://via.placeholder.com/400x300" alt="Placeholder Image" />
                                    )}
                                    <Card.Body className="card-content">
                                        <Card.Title>{offer.offerName}</Card.Title>
                                        <Card.Text><strong>Description:</strong> {offer.offerDescreption}</Card.Text>
                                        <Card.Text><strong>Discount:</strong> {offer.offerDiscount}</Card.Text>
                                        <div className="button-group">
                                            <Button variant="info" className="me-2 custom-btn" onClick={() => handleShow(offer, true)}>
                                                Edit
                                            </Button>
                                            <Button variant="danger" className="me-2 custom-btn" onClick={() => handleDelete(offer.id)}>
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
                                onChange={(e) => setCurrentOffer({ ...currentOffer, title: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter offer description"
                                value={currentOffer.description}
                                onChange={(e) => setCurrentOffer({ ...currentOffer, description: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Discount</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter discount (e.g., 20%)"
                                value={currentOffer.discount}
                                onChange={(e) => setCurrentOffer({ ...currentOffer, discount: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Upload Images</Form.Label>
                            <Form.Control type="file" multiple accept="image/*" onChange={handleImageUpload} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" className="custom-btn" onClick={handleSave}>{isEditMode ? 'Save Changes' : 'Add Offer'}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Offers;
