import React, { useState } from 'react';
import { Card, Button, Row, Col, Form, Carousel, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import hotle from "../images/hotle4.webp";

const RoomCard = ({ room, onDelete }) => {
  return (
    <Card className="my-4" style={{ backgroundColor: '#4a5a3e' }}>
      <Card.Header className="text-white bg-warning">
        {room.offer}
      </Card.Header>
      <Row noGutters>
        {/* Room Image Carousel */}
        <Col md={4}>
          <Carousel>
            {room.images.map((img, idx) => (
              <Carousel.Item key={idx}>
                <img src={img} alt="Room Image" style={{ height: '100%', objectFit: 'cover', width: '100%' ,marginTop:"20%" , marginLeft:"3%" }} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        {/* Room Details */}
        <Col md={5} className="p-4" style={{ backgroundColor: '#4a5a3e' }}>
          <Card.Body>
            <Card.Title className="font-weight-bold">{room.title}</Card.Title>
            <Row className="mb-2">
              <Col><i className="fas fa-user"></i> {room.people} People</Col>
              <Col><i className="fas fa-bed"></i> {room.bed}</Col>
            </Row>
            <Card.Text>{room.description}</Card.Text>
            <a href="#" className="text-success font-weight-bold">
              {room.detailsLinkText}
            </a>
          </Card.Body>
        </Col>

        {/* Rate Section */}
        <Col md={3} className="p-4" style={{ backgroundColor: '#b2925a' }}>
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
            <div className="text-right" >
              <del className="text-muted">£{room.originalPrice}</del>
              <h4 className="font-weight-bold text-danger">£{room.discountPrice}</h4>
              <Button variant="success" className="w-100">Book</Button>
            </div>
          </Form.Group>
        </Col>

        {/* Delete Button */}
        <Col md={12} className="p-2" style={{marginLeft:"3%"}}>
          <Button variant="warning" onClick={() => onDelete(room.id)}>Delete</Button>
        </Col>
      </Row>
    </Card>
  );
};

const RoomCardManager = () => {
  const [rooms, setRooms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newRoom, setNewRoom] = useState({
    title: '',
    people: '',
    bed: '',
    description: '',
    detailsLinkText: '',
    images: [],
    offer: 'Book Direct and get £5 off',
    originalPrice: '',
    discountPrice: '',
  });

  const handleAddRoom = () => {
    setRooms([...rooms, { ...newRoom, id: Date.now() }]);
    setShowModal(false);
  };

  const handleDeleteRoom = (id) => {
    setRooms(rooms.filter(room => room.id !== id));
  };

  return (
    <div className="container">
      {/* Add Room Button */}
      <Button variant="primary" className="mb-4" onClick={() => setShowModal(true)}>
        Add Room
      </Button>

      {/* Room Cards */}
      {rooms.map(room => (
        <RoomCard key={room.id} room={room} onDelete={handleDeleteRoom} />
      ))}

      {/* Modal for Adding Room */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Room Title</Form.Label>
              <Form.Control
                type="text"
                value={newRoom.title}
                onChange={(e) => setNewRoom({ ...newRoom, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Number of People</Form.Label>
              <Form.Control
                type="number"
                value={newRoom.people}
                onChange={(e) => setNewRoom({ ...newRoom, people: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Bed Type</Form.Label>
              <Form.Control
                type="text"
                value={newRoom.bed}
                onChange={(e) => setNewRoom({ ...newRoom, bed: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newRoom.description}
                onChange={(e) => setNewRoom({ ...newRoom, description: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Details Link Text</Form.Label>
              <Form.Control
                type="text"
                value={newRoom.detailsLinkText}
                onChange={(e) => setNewRoom({ ...newRoom, detailsLinkText: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Original Price</Form.Label>
              <Form.Control
                type="number"
                value={newRoom.originalPrice}
                onChange={(e) => setNewRoom({ ...newRoom, originalPrice: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Discounted Price</Form.Label>
              <Form.Control
                type="number"
                value={newRoom.discountPrice}
                onChange={(e) => setNewRoom({ ...newRoom, discountPrice: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Room Images</Form.Label>
              <Form.Control
                type="file"
                multiple
                onChange={(e) => setNewRoom({ ...newRoom, images: Array.from(e.target.files).map(file => URL.createObjectURL(file)) })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddRoom}>
            Add Room
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RoomCardManager;
