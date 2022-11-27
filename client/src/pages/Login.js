import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert"
import "../index.css";
import { useNavigate } from "react-router-dom";


export default function LoginPage({ setUser }) {
  let history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
        history("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    
  }

  return (
    <div className="section login">
      <div className="col img">
                <img src="/img/gallery/img_10.jpg" alt="" />
      </div>
      <div className="col typography">
        <div className="login-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="username">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              autoComplete="off"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
              {isLoading ? "Loading..." : "Login"}
            </Button>
            <Form.Group>
              {errors.map((err) => (
                <Alert key={err}>{err}</Alert>
              ))}
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}
