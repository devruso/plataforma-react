import "./Login.css";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
export function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  return (
    <div className="loginForm">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button className="ml-3">Login com Google</Button>
      </Form>
    </div>
  );
}
