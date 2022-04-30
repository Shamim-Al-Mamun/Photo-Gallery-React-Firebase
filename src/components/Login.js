import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email && !password) {
      setError("email and password is required");
    } else if (!email && password) {
      setError("email is required");
    } else if (email && !password) {
      setError("password is required");
    } else {
      try {
        await logIn(email, password);
        navigate("/home");
        setError("");
        handleClose();
      } catch (err) {
        console.log(err.message);
        setError(err.message.slice(22, -2));
      }
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h3 className="mb-3 text-center">Log-in</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="d-grid gap-2">
            <Button variant="danger" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div className="text-muted small">
          <p className="p-0 m-0">mamun@gmail.com</p>
          <p className="p-0 m-0">12345678</p>
        </div>
      </div>
    </>
  );
};

export default Login;
