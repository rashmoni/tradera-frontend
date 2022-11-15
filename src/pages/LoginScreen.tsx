import { SyntheticEvent, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import iUser from "../interfaces/iUser";

interface iProps {
  user: iUser,
  setUser: Function
}

const LoginScreen = ({user, setUser}: iProps) => {
   // Global state
  
   const navigate = useNavigate();
   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch("http://localhost:9000/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      })

    })      
    .then((response) => response.json())
    .then((json) => onSuccess(json))
    .catch((error) => onFailure(error));
  };

  function onSuccess(returningUser: iUser) {
    console.log(returningUser);
    setUser(returningUser);
    user.id = returningUser.id;
    console.log(user);
    if(returningUser.id === 0) {
      return <LoginScreen user={user} setUser={setUser} />
    }
    navigate("/");
  }

  function onFailure(error: string) {
    console.error(error);
    alert(error);
  }

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
        <footer>
          <p>
            New to Tradera? <Link to="/registration">Sign up now</Link>.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default LoginScreen;
