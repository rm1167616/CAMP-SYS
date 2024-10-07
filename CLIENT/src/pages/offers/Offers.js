import React, { useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import "../../pages/css/offers.css";


const Offers = () => {
  // Sample initial offers 
    const [offers, setOffers] = useState([
    {
        id: 1,
        title: "Summer Sale",
        description: "Get 20% off on all items",
        discount: "20%",
    },
    {
        id: 2,
        title: "Winter Clearance",
        description: "50% off on selected items",
        discount: "50%",
    },
    {
        id: 3,
        title: "Spring Clearance",
        description: "50% off on selected items",
        discount: "50%",
    },
    {
        id: 4,
        title: "Autumn Clearance",
        description: "50% off on selected items",
        discount: "50%",
    },
]);

  // Modal states for adding and updating offers
    const [show, setShow] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [currentOffer, setCurrentOffer] = useState({ title: "", description: "", discount: "" });
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    // Handle modal show/hide
    const handleClose = () => setShow(false);
    const handleShow = (isUpdate = false, offer = {}) => {
        setIsUpdateMode(isUpdate);
        setModalTitle(isUpdate ? "Edit Offer" : "Add New Offer");
        setCurrentOffer(isUpdate ? offer : { title: "", description: "", discount: "" });
        setShow(true);
};

  // Simulate adding or editing offer
    const handleSave = () => {
        if (isUpdateMode) {
        // Simulate offer update
        setOffers(
        offers.map((o) => (o.id === currentOffer.id ? currentOffer : o))
        );
        } else {
        // Simulate adding a new offer
        setOffers([...offers, { ...currentOffer, id: offers.length + 1 }]);
        }
        setShow(false); // Close the modal
    };

    // Simulate offer deletion
    const handleDelete = (id) => {
        // Just show alert for deletion (no real deletion in mock)
        alert(`Offer with id ${id} would be deleted (display only).`);
    };

    return (
        <div className="offers-container mt-5">
        <h1 className ="offers-h1">Manage Offers</h1>
        <Button variant="primary" onClick={() => handleShow(false)}>
            Add New Offer
        </Button>
        <Table striped bordered hover className="mt-4">
            <thead>
            <tr>
                <th>#</th>
                <th>Offer</th>
                <th>Description</th>
                <th>Discount</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {offers.map((offer) => (
                <tr key={offer.id}>
                <td>{offer.id}</td>
                <td>{offer.title}</td>
                <td>{offer.description}</td>
                <td>{offer.discount}</td>
                <td>
                    <Button
                    variant="info"
                    className="me-2"
                    onClick={() => handleShow(true, offer)}
                    >
                    Edit
                    </Button>
                    <Button
                    variant="danger"
                    onClick={() => handleDelete(offer.id)}
                    >
                    Delete
                    </Button>
                </td>
                </tr>
            ))}
            </tbody>
        </Table>

        {/* Modal for Adding/Updating Offer */}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    className = "form-control-add-offers"
                    type="text"
                    placeholder="Enter offer name"
                    value={currentOffer.title}
                    onChange={(e) =>
                    setCurrentOffer({ ...currentOffer, title: e.target.value })
                    }
                />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    className= "form-control-add-offers"
                    type="text"
                    placeholder="Enter offer description"
                    value={currentOffer.description}
                    onChange={(e) =>
                    setCurrentOffer({
                        ...currentOffer,
                        description: e.target.value,
                    })
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
                    setCurrentOffer({
                        ...currentOffer,
                        discount: e.target.value,
                    })
                    }
                />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
};

export default Offers;
