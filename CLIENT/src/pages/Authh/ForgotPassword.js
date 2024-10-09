import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../pages/css/ForgotPassword.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        axios.post("http://localhost:4000/auth/forgot-password", { email })
            .then((response) => {
                setMessage(response.data.message);
                setTimeout(() => navigate("/login"), 3000); // Redirect after 3 seconds
            })
            .catch((err) => {
                setError(err.response.data.message);
            });
    };

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control className="mb-4 w-100"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary w-25" type="submit">
                    Submit
                </Button>
            </Form>
            <div className="back-to-login">
                <p>
                    Remembered your password? <a href="/login">Go back to Login</a>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
