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
    <div className="section forms">
      <form className="form" onSubmit={handleSubmit}>
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
        <Button block size="lg" type="submit" disabled={!validateForm()}>
              {isLoading ? "Loading..." : "Login"}
        </Button>
        {errors.map((err) => (
          <Alert key={err}>{err}</Alert>
        ))}
      </form>
    </div>
  );
}
