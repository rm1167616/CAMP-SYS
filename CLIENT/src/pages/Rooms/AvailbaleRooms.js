import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/RoomsAvailable.css';
import { Container } from "react-bootstrap";
import 'flatpickr/dist/themes/material_blue.css'; // Choose different themes
import axios from 'axios';

const AvailableRooms = () => {
    const [date, setDate] = useState(new Date());
    const [dateTo, setDateTo] = useState(new Date());
    const [roomsData, setRoomsData] = useState([]);
    const [error, setError] = useState("");

    const Submit = () => {
        const cat = document.querySelector(".SelectCategory").value;

        if (cat === "") {
            setError("Category is empty");
            setTimeout(() => {
                setError(""); // Clear error after 4 seconds
            }, 4000);
        } else {
            const From = date.toISOString().split('T')[0]; // Format date to YYYY-MM-DD
            const To = dateTo.toISOString().split('T')[0]; // Format date to YYYY-MM-DD
            SendData(cat, From, To); // Pass variables to SendData
        }
    }

    const SendData = (cat, From, To) => {
        const requestData = {
            category: cat,
            from: From,
            to: To
        };

        axios.post('http://localhost:4000/scadule/', requestData)
            .then(response => {
                if (response.data && response.data.length > 0) {
                    setRoomsData(response.data); // Set response data to state
                    setError(""); // Clear any previous error
                } else {
                    setRoomsData([]);
                    setError("No available rooms found.");
                }
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
                const errorMessage = error.response 
                    ? error.response.data.message || 'An error occurred' 
                    : 'Network Error'; // Handle network errors
                setError('There was an error fetching the data! ' + errorMessage);
            });
    }

    return (
        <Container className="ContainerPage">
            <div className="ContainersRooms">
                <p>Available Rooms</p>
                {roomsData.length > 0 ? (
                    roomsData.map((room) => (
                        <span key={room.roomid} id={room.roomid} className="RoomsNumber">
                            {room.roomid}
                        </span>
                    ))
                ) : (
                    <p>No available rooms found.</p>
                )}
            </div>

            <div className="ContainerFilters">
                <Form.Group className="mb-3 w-100">
                    <Form.Select className="SelectCategory">
                        <option value="">Select Category</option>
                        <option value="rad">rad</option>
                        <option value="type">type</option>
                        <option value="CategoryC">C</option>
                    </Form.Select>
                </Form.Group>

                <div className='FROMTO'>
                    <div className='FilterDays'>
                        <span>From</span>
                        <Flatpickr
                            value={date}
                            onChange={([selectedDate]) => setDate(selectedDate)}
                            options={{ dateFormat: 'Y-m-d' }}
                            className="custom-flatpickr-input From"
                        />
                    </div>
                    <div className='FilterDays'>
                        <span>To</span>
                        <Flatpickr
                            value={dateTo}
                            onChange={([selectedDate]) => setDateTo(selectedDate)}
                            options={{ dateFormat: 'Y-m-d' }}
                            className="custom-flatpickr-input To"
                        />
                    </div>
                </div>

                <Button onClick={Submit} className='BTNFilter'>
                    Filter
                </Button>
            </div>

            {error && (
                <Alert variant="danger" className="mt-4">
                    {error}
                </Alert>
            )}

            <h2 className="Error" style={{ marginTop: "30px", opacity: error ? 1 : 0 }}>
                {error}
            </h2>
        </Container>
    );
};

export default AvailableRooms;
