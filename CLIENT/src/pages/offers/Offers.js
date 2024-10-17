import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Modal, Form, Carousel } from 'react-bootstrap';
import axios from 'axios';
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
    // State to manage the list of offers
    const [offers, setOffers] = useState([]); // List of offers fetched from the backend
    const [show, setShow] = useState(false); // State to manage the visibility of the modal
    const [currentOffer, setCurrentOffer] = useState({ title: '', description: '', discount: '', offersImgs: [] }); // State for the current offer
    const [isEditMode, setIsEditMode] = useState(false); // Flag to determine if we are editing an existing offer

    // Fetch offers from the backend when the component mounts

        // Fetch offers from backend
        useEffect(() => {
            fetchOffers();
        }, []);
    
        // Function to fetch offers
        const fetchOffers = () => {
            axios.get('http://localhost:4000/offers/offers')
                .then(response => setOffers(response.data)) // Update the offers state with the fetched data
                .catch(error => console.error('Error fetching offers:', error)); // Log any error during the fetch
        };

    // Show the modal for adding or editing an offer
    const handleShow = (offer = { title: '', description: '', discount: '', offersImgs: [] }, editMode = false) => {
        setCurrentOffer(offer); // Set the current offer to the selected offer
        setIsEditMode(editMode); // Set edit mode flag
        setShow(true); // Show the modal
    };

    // Reset the current offer state
    const resetCurrentOffer = () => {
        setCurrentOffer({ title: '', description: '', discount: '', offersImgs: [] });
    };

    // Close the modal
    const handleClose = () => {
        setShow(false);
        resetCurrentOffer(); // Reset current offer when closing the modal
    };
    

    // Create or update offer
    const handleSave = () => {
        console.log('Current offer:', currentOffer); // Log the current offer for debugging
    
        // Basic validation to check for empty fields
        if (!currentOffer.title || !currentOffer.description || !currentOffer.discount) {
            alert("Please fill in all required fields.");
            return; // Exit early if validation fails
        }
    
        const formData = new FormData();
        formData.append('title', currentOffer.title);
        formData.append('description', currentOffer.description);
        formData.append('discount', currentOffer.discount);

        currentOffer.offersImgs.forEach((image, index) => {
            formData.append(`offersImgs[${index}]`, image);
        });

        /* Update Offer */ 
        if (isEditMode) {
            axios.put(`http://localhost:4000/offers/update/${currentOffer.id}`, formData)
                .then(response => {
                    fetchOffers(); // Refresh offers after update
                    handleClose();
                })
                .catch(error => console.error('Error updating offer:', error));
        } else {
            // Create new offer
            axios.post('http://localhost:4000/offers/create', formData)
                .then(response => {
                    fetchOffers(); // Refresh offers after adding new
                    handleClose();
                })
                .catch(error => console.error('Error adding offer:', error));
        }
    };

    // Delete offer
    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/offers/delete/${id}`)
            .then(() => {
                setOffers(offers.filter((offer) => offer.id !== id)); // Filter out the deleted offer
            })
            .catch(error => {
                console.error('Error deleting offer:', error); // Log any error during deletion
            });
    };

    // Handle image upload (convert to FormData)
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files); // Multiple file upload
        setCurrentOffer({ ...currentOffer, offersImgs: files });
    };

    return (
        <div className="offers-container">
<<<<<<< HEAD
            <h1 className="text-center mb-4 mt-4" >Hotel Room Offers</h1>
            <Button
                variant="success"
                className="add-custom-btn"
                onClick={() => handleShow()}>
=======
            <h1 className="text-center mb-4 mt-4">Room Offers</h1>
            <Button variant="success" className="add-custom-btn" onClick={() => handleShow()}>
>>>>>>> 7f0aa62a93e7b2e1f339f50de8cad1f0fefa578c
                Add Offer
            </Button>

            <div className="offer-card-container">
                <Row className="justify-content-center mt-3">
                    {offers.length > 0 ? (
                        offers.map((offer) => (
                            <Col md={12} key={offer.id} className="mb-4 animated-card">
                                <Card className="offer-card">
                                    {offer.offersImgs && Array.isArray(offer.offersImgs) && offer.offersImgs.length > 0 ? (
                                        <Carousel>
                                            {offer.offersImgs.map((image, index) => (
                                                <Carousel.Item key={index}>
                                                    <img className="fixed-size-image" src={image} alt={`Offer Image ${index + 1}`} />
                                                </Carousel.Item>
                                            ))}
                                        </Carousel>
                                    ) : (
                                        <img className="fixed-size-image" src="https://via.placeholder.com/400x300" alt="Placeholder Image" />
                                    )}
                                    <Card.Body className="card-content">
                                        <Card.Title>{offer.title}</Card.Title>
                                        <Card.Text><strong>Description:</strong> {offer.description}</Card.Text>
                                        <Card.Text><strong>Discount:</strong> {offer.discount}</Card.Text>
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
                                type="number"
                                placeholder="Enter discount (e.g., 20)"
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
                    <Button variant="primary" className="custom-btn" onClick={handleSave}>
                        {isEditMode ? 'Save Changes' : 'Add Offer'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Offers;