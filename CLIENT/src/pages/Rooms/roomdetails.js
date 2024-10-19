import React, { useState } from 'react';
import { Card, Button, Row, Col, Form, Carousel, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const RoomCard = ({ room, onDelete, onUpdate }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Card className="my-4" style={{ backgroundColor: '#4a5a3e', color: 'white' }}>
      <Card.Header className="text-white bg-warning">
        {room.offer}
      </Card.Header>
      <Row noGutters>
        {/* Room Image Carousel */}
        <Col md={4}>
          <Carousel>
            {room.images.map((img, idx) => (
              <Carousel.Item key={idx}>
                <img
                  src={img}
                  alt="Room Image"
                  style={{
                    height: '100%',
                    objectFit: 'cover',
                    width: '100%',
                    marginTop: '20%',
                    marginLeft: '3%',
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        {/* Room Details */}
        <Col md={5} className="p-4">
          <Card.Body>
            <Card.Title className="font-weight-bold">{room.title}</Card.Title>
            <Row className="mb-2">
              <Col>
                <i className="fas fa-user"></i> {room.people} People
              </Col>
              <Col>
                <i className="fas fa-bed"></i> {room.bed}
              </Col>
            </Row>
            <Card.Text>{room.description}</Card.Text>

            {/* View More Details */}
            <a
              href="#"
              className="text-success font-weight-bold"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'View Less Details' : 'View More Details'}
            </a>

            {/* Additional details when expanded */}
            {showMore && (
              <div className="mt-3">
                <h5>Room Features</h5>
                <ul>
                  <li>
                    <i className="fas fa-wifi"></i> Free Wi-Fi
                  </li>
                  <li>
                    <i className="fas fa-tv"></i> Satellite TV
                  </li>
                  <li>
                    <i className="fas fa-coffee"></i> Coffee/Tea Maker
                  </li>
                </ul>
                <h5>Excluded Services</h5>
                <ul>
                  <li>
                    <i className="fas fa-concierge-bell"></i> Room Service
                  </li>
                  <li>
                    <i className="fas fa-parking"></i> Paid Parking
                  </li>
                </ul>
              </div>
            )}
          </Card.Body>
        </Col>

        {/* Rate Section */}
        <Col md={3} className="p-4" style={{ backgroundColor: '#b2925a' }}>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="DIRECT RATE: Best Flexible Rate Room Only"
              className="mb-2"
              checked={room.rateOptions.includes('roomOnly')}
              onChange={() => room.toggleRateOption('roomOnly')}
              style={{ color: 'white' }}
            />
            <Form.Check
              type="checkbox"
              label="DIRECT RATE: Best Flexible Rate with Breakfast"
              className="mb-4"
              checked={room.rateOptions.includes('withBreakfast')}
              onChange={() => room.toggleRateOption('withBreakfast')}
              style={{ color: 'white' }}
            />
            <div className="text-right">
              <del className="text-muted">£{room.originalPrice}</del>
              <h4 className="font-weight-bold text-danger">£{room.discountPrice}</h4>
              <Button variant="success" className="w-100">
                Book
              </Button>
            </div>
          </Form.Group>
        </Col>
      </Row>

      {/* Update and Delete Buttons */}
      <Row>
        <Col md={12} className="p-2" style={{marginLeft:'10px'}}>
          <Button className="mb-4" onClick={() => onUpdate(room)}>Update</Button>
          <Button className="mb-4" onClick={() => onDelete(room.id)}>Delete</Button>
        </Col>
      </Row>
    </Card>
  );
};

const RoomCardManager = () => {
  const [rooms, setRooms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingRoom, setEditingRoom] = useState(null);
  const [newRoom, setNewRoom] = useState({
    title: '',
    people: '',
    bed: '',
    description: '',
    images: [],
    offer: 'Book Direct and get £5 off',
    originalPrice: '',
    discountPrice: '',
    rateOptions: [],
  });

  const toggleRateOption = (option) => {
    setNewRoom((prevRoom) => {
      if (prevRoom.rateOptions.includes(option)) {
        return { ...prevRoom, rateOptions: prevRoom.rateOptions.filter((opt) => opt !== option) };
      } else {
        return { ...prevRoom, rateOptions: [...prevRoom.rateOptions, option] };
      }
    });
  };

  const handleAddRoom = () => {
    if (editingRoom) {
      setRooms(
        rooms.map((room) =>
          room.id === editingRoom.id ? { ...newRoom, id: editingRoom.id } : room
        )
      );
    } else {
      setRooms([...rooms, { ...newRoom, id: Date.now(), toggleRateOption }]);
    }
    setShowModal(false);
    setEditingRoom(null);
    resetNewRoom();
  };

  const resetNewRoom = () => {
    setNewRoom({
      title: '',
      people: '',
      bed: '',
      description: '',
      images: [],
      offer: 'Book Direct and get £5 off',
      originalPrice: '',
      discountPrice: '',
      rateOptions: [],
    });
  };

  const handleUpdateRoom = (room) => {
    setNewRoom(room);
    setEditingRoom(room);
    setShowModal(true);
  };

  const handleDeleteRoom = (id) => {
    setRooms(rooms.filter((room) => room.id !== id));
  };

  return (
    <div className="container">
      {/* Add Room Button */}
      <Button
        variant="primary"
        className="mb-4"
        onClick={() => {
          resetNewRoom();
          setShowModal(true);
        }}
        style={{ marginTop: '2%' }}
      >
        Add Room
      </Button>

      {/* Room Cards */}
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} onDelete={handleDeleteRoom} onUpdate={handleUpdateRoom} />
      ))}

      {/* Modal for Adding/Updating Room */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingRoom ? 'Update Room' : 'Add New Room'}</Modal.Title>
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
                onChange={(e) =>
                  setNewRoom({
                    ...newRoom,
                    images: Array.from(e.target.files).map((file) =>
                      URL.createObjectURL(file)
                    ),
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddRoom}>
            {editingRoom ? 'Update Room' : 'Add Room'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RoomCardManager;
