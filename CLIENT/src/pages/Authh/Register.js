import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { setAuthUser } from "../../helper/Storage";
import { useNavigate } from "react-router-dom";
import "../../pages/css/register.css";

const Register = () => {
    const navigate = useNavigate();
    const [register, setRegister] = useState({
        email: "",
        password: "",
        confirmPassword: "", // For password confirmation
        name: "",
        birthday: "",
        gender: "",
        phone: "",
        loading: false,
        err: [],
        passwordMatchError: false, // For password match error
    });

    const RegisterFun = (e) => {
    e.preventDefault();

    // Check if password and confirmPassword match
    if (register.password !== register.confirmPassword) {
        setRegister({ ...register, passwordMatchError: true });
      return; // Exit if passwords don't match
    }

    setRegister({ ...register, loading: true, err: [] });

    axios
    .post("http://localhost:4000/auth/register", {
        email: register.email, // Send email
        password: register.password, // Send password
        name: register.name, // Send name
        birthday: register.birthday, // Send birthday
        gender: register.gender,     // Send gender
        phone: register.phone,       // Send phone
    })
    .then((resp) => {
        setRegister({ ...register, loading: false, err: [] });
        setAuthUser(resp.data);
        navigate("/");
    })
    .catch((errors) => {
        setRegister({
        ...register,
        loading: false,
        err: errors.response.data.errors,
        });
    });
};

    return (
    <div className="login-container">
        <h1 className = "login-h1 mb-4"> Create your Account </h1>

        {/* Show error if passwords don't match */}
        {register.passwordMatchError && (
            <Alert variant="danger" className="p-2">
            Passwords do not match!
            </Alert>
        )}

      {/* Show server errors */}
        {register.err.map((error, index) => (
            <Alert key={index} variant="danger" className="p-2">
            {error.msg}
            </Alert>
        ))}

        <Form onSubmit={RegisterFun}>

        {/* Name Input */}
        <Form.Group className="mb-3 w-100">
        <Form.Control
            type="text"
            placeholder="Full Name"
            required
            value={register.name}
            onChange={(e) => setRegister({ ...register, name: e.target.value })}
        />
        </Form.Group>

        {/* Email Input */}
        <Form.Group className="mb-3 w-100">
        <Form.Control
            type="email"
            placeholder="Email"
            required
            value={register.email}
            onChange={(e) =>
                setRegister({ ...register, email: e.target.value })
            }
        />
        </Form.Group>

        {/* Birthday Input */}
        <Form.Group className="mb-3 w-100">
        <Form.Control
            type="date"
            placeholder="Birthday"
            required
            value={register.birthday}
            onChange={(e) =>
                setRegister({ ...register, birthday: e.target.value })
            }
        />
        </Form.Group>

        {/* Gender Input (Dropdown) */}
        <Form.Group className="mb-3 w-100">
        <Form.Select className = "select-gender"
            value={register.gender}
            onChange={(e) => setRegister({ ...register, gender: e.target.value })}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </Form.Select>
        </Form.Group>

        {/* Phone Input */}
        <Form.Group className="mb-3 w-100">
        <Form.Control
            type="tel"
            placeholder="Phone Number"
            required
            value={register.phone}
            onChange={(e) => setRegister({ ...register, phone: e.target.value })}
        />
        </Form.Group>

        {/* Password Input */}
        <Form.Group className="mb-3 w-100">
        <Form.Control
            type="password"
            placeholder="Password"
            required
            value={register.password}
            onChange={(e) =>
                setRegister({ ...register, password: e.target.value })
            }
        />
        </Form.Group>

        {/* Confirm Password Input */}
        <Form.Group className="mb-4 w-100">
        <Form.Control
            type="password"
            placeholder="Confirm Password"
            required
            value={register.confirmPassword}
            onChange={(e) =>
                setRegister({ ...register, confirmPassword: e.target.value })
            }
        />
        </Form.Group>

        <Button
            className="btn btn-dark w-50"
            variant="primary"
            type="submit"
            disabled={register.loading === true}>
            Register
        </Button>
    </Form>
    </div>
);
};

export default Register;