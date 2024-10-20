import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { setAuthUser } from "../../helper/Storage";
import { useNavigate, Link } from "react-router-dom";
import "../../pages/css/login.css";


const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
    loading: false,
    err: [],
    rememberMe: false, // Add state for 'Remember Me'
  });

  const LoginFun = (e) => {
    e.preventDefault(); // To prevent refreshing on submit

    setLogin({ ...login, loading: true, err: [] });

    axios
      .post("http://localhost:4000/Auth/login", {
        email: login.email,
        password: login.password,
      })
      .then((resp) => {
        setLogin({ ...login, loading: false, err: [] });
        
          /* Handle "Remember Me" */
          if (login.rememberMe) {
            localStorage.setItem("authUser", JSON.stringify(resp.data)); // Save token in localStorage (this persists even after closing the browser).
          } else {
            sessionStorage.setItem("authUser", JSON.stringify(resp.data)); // Save token in sessionStorage (which gets cleared when the session ends).
          }
          setAuthUser(resp.data);
          navigate("/");
      })
      .catch((errors) => {
        setLogin({
          ...login,
          loading: false,
          err: errors.response.data.errors,
        });
      });
  };

  return (
    <div className = "background-img"> 
      <div className="login-container">
        <h1 className = "login-h1 mb-4">Login</h1>
        
        {/* Display error message for server-side errors */}
        {login.err.map((error, index) => (
          <Alert key={index} variant="danger" className="p-2">
            {error.msg}
          </Alert>
        ))}

        <Form onSubmit={LoginFun}>
          <Form.Group className="mb-4 w-100">
            <Form.Control
              type="email"
              placeholder="Email"
              required
              value={login.email}
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-4 w-100">
            <Form.Control
              type="password"
              placeholder="Password"
              required
              value={login.password}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
            />
          </Form.Group>

          {/* Remember Me and Forget Password */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <Form.Group controlId="rememberMe" className="d-flex align-items-center">
              <Form.Check 
                type="checkbox" 
                label="Remember Me" 
                checked={login.rememberMe}
                onChange={(e) => setLogin({ ...login, rememberMe: e.target.checked })}
              />
            </Form.Group>

            <Link to="/forgot-password" className="forgot-password-link">
              Forgot Password?
            </Link>
          </div>

          <Button
            className="btn btn-login w-25"
            variant="primary"
            type="submit"
            disabled={login.loading === true}>
            Submit
          </Button>

          {/* Create Account Link */}
          <div className="mt-3">
            <Link to="/register" className="create-account-link">
              Don't have an account? Create one
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;