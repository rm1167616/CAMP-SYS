import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Row, Col, Card, Carousel } from 'react-bootstrap';
import axios from 'axios';
import './offers.css';

const Offers = () => {
    const [offers, setOffers] = useState([]);
    const [show, setShow] = useState(false);
    const [currentOffer, setCurrentOffer] = useState({
        id: '',
        offerName: '',
        offerDescreption: '', // Updated to match backend field
        offerDiscount: '',
        images: [],
        imagePreviewUrls: [],
    });
    const [errors, setErrors] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchOffers();
    }, []);

    const fetchOffers = async () => {
        try {
            const response = await axios.get('http://localhost:4000/offers/offers');
            setOffers(response.data);
        } catch (error) {
            console.error('Error fetching offers:', error);
        }
    };

    const handleShow = (offer = {}, editMode = false) => {
        setCurrentOffer({
            id: offer.id || '',
            offerName: offer.offerName || '',
            offerDescreption: offer.offerDescreption || '', // Updated to match backend field
            offerDiscount: offer.offerDiscount || '',
            images: [],
            imagePreviewUrls: [],
        });
        setIsEditMode(editMode);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setErrors([]);
    };

    const handleSave = async () => {
        if (!currentOffer.offerName || !currentOffer.offerDescreption || !currentOffer.offerDiscount) {
            setErrors([{ msg: "Please fill in all required fields." }]);
            return;
        }

        const formData = new FormData();
        formData.append('offerName', currentOffer.offerName);
        formData.append('offerDescreption', currentOffer.offerDescreption); // Updated to match backend field
        formData.append('offerDiscount', currentOffer.offerDiscount);

        currentOffer.images.forEach((img) => {
            formData.append('images', img);
        });

        setLoading(true);

        try {
            if (isEditMode) {
                await axios.put(`http://localhost:4000/offers/update/${currentOffer.id}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            } else {
                await axios.post('http://localhost:4000/offers/create', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            }
            fetchOffers();
            handleClose();
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                console.error('Error saving offer:', error);
                setErrors([{ msg: "Error saving offer. Please try again." }]);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const imagePreviewUrls = files.map(file => URL.createObjectURL(file));
        setCurrentOffer({ ...currentOffer, images: files, imagePreviewUrls });

        // Clean up object URLs on component unmount
        return () => {
            imagePreviewUrls.forEach(url => URL.revokeObjectURL(url));
        };
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this offer?')) {
            try {
                await axios.delete(`http://localhost:4000/offers/delete/${id}`);
                fetchOffers();
            } catch (error) {
                console.error('Error deleting offer:', error);
            }
        }
    };

    return (
        <div>
            <h1>Offers</h1>
            <Button onClick={() => handleShow()}>Add Offer</Button>

            <Row className="mt-4">
                {offers.map((offer) => (
                    <Col key={offer.id} xs={12} className="mb-4">
                        <Card style={{ width: '100%' }}>
                            <Carousel>
                                {(offer.images || []).map((image, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            src={`http://localhost:4000/server/uploads/${image}`}
                                            alt={`Offer Image ${index}`}
                                            style={{ width: '100%' }}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            <Card.Body>
                                <Card.Title>{offer.offerName}</Card.Title>
                                <Card.Text>{offer.offerDescreption}</Card.Text> {/* Updated to match backend field */}
                                <Card.Text>Discount: {offer.offerDiscount}%</Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="warning" onClick={() => handleShow(offer, true)}>Edit</Button>
                                    <Button variant="danger" onClick={() => handleDelete(offer.id)}>Delete</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditMode ? 'Edit Offer' : 'Add Offer'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Offer Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Offer Name"
                                value={currentOffer.offerName}
                                onChange={(e) => setCurrentOffer({ ...currentOffer, offerName: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Offer Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Offer Description"
                                value={currentOffer.offerDescreption} // Updated to match backend field
                                onChange={(e) => setCurrentOffer({ ...currentOffer, offerDescreption: e.target.value })} // Updated to match backend field
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Offer Discount</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Offer Discount"
                                value={currentOffer.offerDiscount}
                                onChange={(e) => setCurrentOffer({ ...currentOffer, offerDiscount: e.target.value })}
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

                        {/* Image Previews */}
                        <div className="image-previews">
                            {currentOffer.imagePreviewUrls.map((url, index) => (
                                <img key={index} src={url} alt={`Preview ${index}`} style={{ width: '100px', marginRight: '10px' }} />
                            ))}
                        </div>
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
