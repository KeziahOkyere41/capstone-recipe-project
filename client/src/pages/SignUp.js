import React,  { useState } from 'react';
import CustomImage from "../components/CustomImage";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert"
import "../index.css";
import { useNavigate } from "react-router-dom";

function SignUpPage({ setUser }) {
  let history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  


  function validateForm() {
      return name.length > 0 && password.length > 0 && (password===passwordConfirmation);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        image,
        password,
        password_confirmation: passwordConfirmation,
        
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user)).then(history("/"));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
      <div className="section signup">
      {/*<Form className="form" onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
            autoFocus
            autoComplete="off"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
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
        <Form.Group size="lg" controlId="password_confirmation">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
            {isLoading ? "Loading..." : "Signup"}
        </Button>
        <Form.Group>
          {errors.map((err) => (
            <Alert key={err}>{err}</Alert>
          ))}
        </Form.Group>
      </Form>*/}
      <form className="form" onSubmit={handleSubmit}>
         <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          required
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      </div>
  );
}

export default SignUpPage;
