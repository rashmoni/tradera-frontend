import { SyntheticEvent, useState } from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

interface Props {
  history: any;
}

const LoginScreen = ({ history }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();

    // interact with the backend using fetch
    await fetch("https://my.api.mockaroos.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    history.push("/");
  };

  return (
    <section>
      <div style={{ marginTop: "65px" }}>
        <FormContainer>
          <h1>Login</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email" className="my-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password" className="my-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="my-3">
              Login
            </Button>
          </Form>
        </FormContainer>
      </div>
    </section>
  );
};

export default LoginScreen;
