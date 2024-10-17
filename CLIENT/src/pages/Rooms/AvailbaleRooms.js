import React, { useState, useEffect, useRef  } from 'react';
import Flatpickr from 'react-flatpickr';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/RoomsAvailable.css';
import { Container } from "react-bootstrap";
import 'flatpickr/dist/themes/material_blue.css'; // You can choose different themes

const AvailableRooms = () => {
    const rooms = Array.from({ length: 245 }, (_, i) => i); // Creates an array of room numbers from 0 to 243
    const [date, setDate] = useState(new Date());
    const [dateTo, ToDate] = useState(new Date());
    return (
        <Container className="ContainerPage">
            <div className="ContainersRooms">
                <p>AvailableRooms</p>
                {rooms.map((room) => (
                    <span key={room} id={room} className="RoomsNumber">
                        {room}
                    </span>
                ))}
            </div>
            <div className="ContainerFilters">
                <Form.Group className="mb-3 w-100">
                    {/* Select Catigory */}
                    <Form.Select className="SelectCatigory"
                    // value={Select.Catigory}
                    >
                        <option value="">Select Catigory</option>
                        <option value="CatigoryA">A</option>
                        <option value="CatigoryB">B</option>
                        <option value="Catigoryc">C</option>
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
                        onChange={([selectedDate]) => ToDate(selectedDate)}
                        // options={{ dateFormat: 'Y-m-d'  }}
                        className="custom-flatpickr-input To"
                    />
                </div>
            </div>
            <Button className='BTNFilter'>
                Filter
            </Button>
            </div>

        </Container>
    );
};
export default AvailableRooms;