import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert"
import "../index.css";
import { useHistory } from "react-router-dom";


export default function LoginPage({ onLogin }) {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user)).then(history.push("/"));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
              autoFocus
              autoComplete="off"
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
  );
}