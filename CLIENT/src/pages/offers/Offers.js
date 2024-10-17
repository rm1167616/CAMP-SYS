import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Row, Col, Card, Carousel } from 'react-bootstrap';
import axios from 'axios';

const Offers = () => {
    const [offers, setOffers] = useState([]);
    const [show, setShow] = useState(false);
    const [currentOffer, setCurrentOffer] = useState({ title: '', description: '', discount: '', offersImgs: [] });
    const [errors, setErrors] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchOffers();
    }, []);

    const fetchOffers = () => {
        axios.get('http://localhost:4000/offers/offers')
            .then(response => setOffers(response.data))
            .catch(error => console.error('Error fetching offers:', error));
    };

    const handleShow = (offer = { title: '', description: '', discount: '', offersImgs: [] }, editMode = false) => {
        setCurrentOffer(offer);
        setIsEditMode(editMode);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setErrors([]);
        setCurrentOffer({ title: '', description: '', discount: '', offersImgs: [] });
    };

    const handleSave = () => {
        if (!currentOffer.title || !currentOffer.description || !currentOffer.discount) {
            setErrors([{ msg: "Please fill in all required fields." }]);
            return;
        }

        const formData = new FormData();
        formData.append('title', currentOffer.title);
        formData.append('description', currentOffer.description);
        formData.append('discount', currentOffer.discount);

        currentOffer.offersImgs.forEach((image, index) => {
            formData.append(`offersImgs`, image);
        });

        setLoading(true);

        const url = isEditMode ? `http://localhost:4000/offers/update/${currentOffer.id}` : 'http://localhost:4000/offers/create';
        const method = isEditMode ? 'put' : 'post';

        axios({
            method: method,
            url: url,
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
        })
            .then(response => {
                fetchOffers();
                handleClose();
            })
            .catch(error => {
                if (error.response && error.response.data.errors) {
                    setErrors(error.response.data.errors);
                } else {
                    console.error('Error adding offer:', error);
                }
            })
            .finally(() => setLoading(false));
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setCurrentOffer({ ...currentOffer, offersImgs: files });
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this offer?')) {
            axios.delete(`http://localhost:4000/offers/delete/${id}`)
                .then(() => fetchOffers())
                .catch(error => console.error('Error deleting offer:', error));
        }
    };

    return (
        <div>
            <h1>Offers</h1>
            <Button onClick={() => handleShow()}>Add Offer</Button>
            <Row>
                {offers.length > 0 ? (
                    offers.map((offer) => (
                        <Col key={offer.id} className="mb-4">
                            <Card>
                                {offer.offersImgs && offer.offersImgs.length > 0 ? (
                                    <Carousel>
                                        {offer.offersImgs.map((imgPath, index) => (
                                            <Carousel.Item key={index}>
                                                <img
                                                    src={`http://localhost:4000/uploads/${imgPath}`}
                                                    alt={`Offer ${index}`}
                                                    className="d-block w-100"
                                                />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                ) : (
                                    <p>No images available</p>
                                )}
                                <Card.Body>
                                    <Card.Title>{offer.title}</Card.Title>
                                    <Card.Text>{offer.description}</Card.Text>
                                    <Card.Text>Discount: {offer.discount}%</Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <Button variant="info" onClick={() => handleShow(offer, true)}>Edit</Button>
                                        <Button variant="danger" onClick={() => handleDelete(offer.id)}>Delete</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p>No offers available</p>
                )}
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditMode ? 'Edit Offer' : 'Add Offer'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter title" 
                                value={currentOffer.title} 
                                onChange={(e) => setCurrentOffer({ ...currentOffer, title: e.target.value })} 
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter description" 
                                value={currentOffer.description} 
                                onChange={(e) => setCurrentOffer({ ...currentOffer, description: e.target.value })} 
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Discount</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="Enter discount" 
                                value={currentOffer.discount} 
                                onChange={(e) => setCurrentOffer({ ...currentOffer, discount: e.target.value })} 
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Upload Images</Form.Label>
                            <Form.Control 
                                type="file" 
                                multiple 
                                onChange={handleImageUpload} 
                            />
                        </Form.Group>
                    </Form>
                    {errors.length > 0 && (
                        <ul style={{ color: 'red' }}>
                            {errors.map((error, index) => (
                                <li key={index}>{error.msg}</li>
                            ))}
                        </ul>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleSave}>
                        {loading ? 'Saving...' : isEditMode ? 'Save Changes' : 'Add Offer'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Offers;
