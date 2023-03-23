import "./Login.css";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { usuarios } from "../../data/usuarios";

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  let navigate = useNavigate();
  function validateForm(e){
    e.preventDefault();
    const isValid= usuarios.find(e => email === e.email && senha === e.senha);
    if(isValid){

      navigate("/usuarios")
    }else{
      alert("Usuario não encontrado")
    }
  }
  return (
    <div className="loginForm">
        <Card style={{width:"25rem"}}>
            <Card.Header>
                <h2 className="text-center">Login</h2>
            </Card.Header>
            <Card.Body>
               <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Password"  onChange={(e)=>setSenha(e.target.value)} required/>
        </Form.Group>
        <Button variant="primary" className="w-100 mb-3" type="submit" onClick={validateForm}>
          Login
        </Button>
        <Button className="w-100">Login com Google</Button>
      </Form> 
            </Card.Body>
            <Card.Footer className="text-muted">
                <a href="#">Cadastre-se </a>
            </Card.Footer>
        </Card>
      
    </div>
  );
}
