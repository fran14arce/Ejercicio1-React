import React from 'react';

import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { ElementosTabla } from '../data/ElementosTabla';

class Usuarios extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <h1>Listado de usuarios</h1>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Usuario</th>
                  </tr>
                </thead>
                <tbody>
                  {ElementosTabla.map((item) => {
                    return (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.apellido}</td>
                        <td>{item.usuario}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ElementosTabla[0].imagen} />
              <Card.Body>
                <Card.Title>
                  {ElementosTabla[0].nombre} {ElementosTabla[0].apellido}
                </Card.Title>
                <Card.Text>{ElementosTabla[0].notaMedia}</Card.Text>
              </Card.Body>
            </Card>
            <Col lg={4} md={6}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Usuarios;
