import React from 'react';
import { Card, Button, Row, Col, Form, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Rooms/rooms.css"

const RoomCard = () => {
  return (
    <Card className="my-4" style={{ backgroundColor: '#d69f5a' }}>
      <Card.Header className="text-white bg-danger">
        Book Direct and get £5 off
      </Card.Header>
      <Row noGutters>
        {/* Room Image */}
        <Col md={4}>
          <Card.Img
            src="path_to_image.jpg" 
            alt="Room Image" 
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </Col>

        {/* Room Details */}
        <Col md={5} className="p-4" style={{ backgroundColor: '#d69f5a' }}>
          <Card.Body>
            <Card.Title className="font-weight-bold">Cosy Double Room</Card.Title>
            <Row className="mb-2">
              <Col><i className="fas fa-user"></i> 2 People</Col>
              <Col><i className="fas fa-bed"></i> 1 Queen Bed</Col>
            </Row>
            <Card.Text>
              The rooms offer up to 14sqm of space with a 5ft bed suitable for two persons. These rooms are perfect for a simple stayover in one of our smaller rooms. Include a practically designed work desk.
            </Card.Text>
            <a href="#" className="text-success font-weight-bold">
              View Room Details And Enhancements
            </a>
          </Card.Body>
        </Col>

        {/* Rate Section */}
        <Col md={3} className="p-4" style={{ backgroundColor: '#8e653c' }}>
          <Form.Group>
            <Form.Check
              type="radio"
              label="DIRECT RATE: Best Flexible Rate Room Only"
              name="rateOptions"
              className="mb-2"
            />
            <Form.Check
              type="radio"
              label="DIRECT RATE: Best Flexible Rate with Breakfast"
              name="rateOptions"
              className="mb-4"
            />
            <div className="text-right">
              <del className="text-muted">£112.33</del>
              <h4 className="font-weight-bold text-danger">£107.33</h4>
              <Button variant="success" className="w-100">Book</Button>
            </div>
          </Form.Group>
        </Col>

        {/* Promotion Banner */}
        <Col md={2} className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#d69f5a' }}>
          <div className="text-center">
            <p className="text-success font-weight-bold">
              Choose Direct Rate to get £5 off Best Flexible Rate
            </p>
            <Image src="path_to_promo_image.jpg" alt="Promo" fluid />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default RoomCard;
