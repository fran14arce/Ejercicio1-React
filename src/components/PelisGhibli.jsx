import React from 'react';

import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import CardPeli from './CardPeli';

class PelisGhibli extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      selectedItem: '',
    };
  }

  changeStateClicked(item) {
    this.setState({
      selectedItem: item,
    });
  }

  async componentDidMount() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const responseData = await response.json();
    this.setState({ tableData: responseData, selectedItem: responseData[0] });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <h1>Listado de películas Ghibli</h1>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Director</th>
                    <th>Año</th>
                    <th>Puntuación</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr onClick={() => this.changeStateClicked(item)}>
                        <td>{item.title}</td>
                        <td>{item.director}</td>
                        <td>{item.release_date}</td>
                        <td>{item.rt_score}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={8}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Img variant="top" src={this.state.selectedItem.image}></Card.Img>
                  <Card.Title>{this.state.selectedItem.title}</Card.Title>
                  <Card.Text>
                    Título original: {this.state.selectedItem.original_title}
                    <p />
                    Director: {this.state.selectedItem.director}
                    <p />
                    Argumento: {this.state.selectedItem.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PelisGhibli;
