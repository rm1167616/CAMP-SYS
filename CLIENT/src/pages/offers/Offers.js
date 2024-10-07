import React , { useState }  from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Offers = () => {
    // Sample offers data (can be fetched from an API in the future)
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
    
    return (
        <div className="container mt-5">
        <h1 className="text-center mb-4">Current Offers</h1>
        <Row>
            {offers.length > 0 ? (
            offers.map((offer) => (
                <Col md={4} key={offer.id} className="mb-4">
                <Card>
                    <Card.Body>
                    <Card.Title>{offer.title}</Card.Title>
                    <Card.Text>
                        <strong>Description:</strong> {offer.description}
                    </Card.Text>
                    <Card.Text>
                        <strong>Discount:</strong> {offer.discount}
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                    </Card.Body>
                </Card>
                </Col>
            ))
            ) : (
            <p>No offers available</p>
            )}
        </Row>
        </div>
    );
};

export default Offers;
