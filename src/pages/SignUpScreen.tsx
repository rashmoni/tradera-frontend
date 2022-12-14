import { SyntheticEvent, useState } from "react";
import FormContainer from "../components/FormContainer";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const SignupScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch("http://localhost:9000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: firstName + " " + lastName,
        email,
        password,
      }),
    }).then((response) => onSuccess(response))
    .catch((error) => onFailure(error));;
  };

  function onSuccess(response: any) {
    if (!response.ok) {
      alert("Could not create new account. Email already registered.");
    } else {
      alert("Account created.");
      navigate("/login");
    } 
  }

  function onFailure(error: string) {
    console.error(error);
    alert(error);
  }

  return (
    <section id="signUpScreen">
      <div className="header"></div>
      <FormContainer>
        <h1 className="my-3">Sign Up</h1>
        <Form onSubmit={submitHandler} className="py-3">
          <Form.Group controlId="firstName" className="my-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="firstName"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="lastName" className="my-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="lastName"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="email" className="my-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="password" className="my-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="my-3">
            Sign Up
          </Button>
        </Form>
        <footer>
          <p>
            Already registered? <Link to="/login">Go to login</Link>.
          </p>
        </footer>
      </FormContainer>
    </section>
  );
};

export default SignupScreen;
