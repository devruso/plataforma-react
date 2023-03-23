import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { usuarios } from "../../data/usuarios";

export function Usuarios() {
  return (
    <div className="usuarios">
      <h1>Usuarios</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Editar</th>
            <th>Perfil</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => {
            return (
              <tr>
                <td>{usuario.id}</td>
                <td>{usuario.nome}</td>
                <td>{usuario.idade}</td>
                <td>{usuario.email}</td>
                <td>
                  <Link to={`/usuario/edit/${usuario.id}`}>Editar</Link>
                </td>
                <td>
                    <Link to={`/usuario/perfil/${usuario.id}`}> Perfil</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
