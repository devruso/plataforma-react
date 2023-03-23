import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { usuarios } from "../../data/usuarios";

export function  Perfil(){
    
    let params = useParams();
    params = params.id;
    let perfil = usuarios.find((usuario)=>{
        return usuario.id === parseInt(params);
    })

    return (
        <div className="perfil">
            <Container>
                <Card>
                <Card.Header>{perfil.nome}</Card.Header>
                <Card.Body>{perfil.email}</Card.Body>
                <Card.Body>{perfil.idade}</Card.Body>
            </Card>
                <Card.Footer><Button variant="dark"> voltar</Button></Card.Footer>
            </Container>
            
        </div>
    )
}
