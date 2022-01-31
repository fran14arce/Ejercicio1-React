import React from 'react';

import { Card, Container, Table, Row, Col } from 'react-bootstrap';

class FotosNasa extends React.Component {
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
    const response = await fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=nf0Ch1m23QtORxmFL0RjeUZ6bBnciP7zqa46fhOf'
    );
    const responseData = await response.json();
    this.setState({
      tableData: responseData['photos'],
      selectedItem: responseData['photos'][0],
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <h1>Fotos NASA</h1>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>ID Foto</th>
                    <th>Cámara</th>
                    <th>Fecha foto</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr onClick={() => this.changeStateClicked(item)}>
                        <td>{item.id}</td>
                        <td>{item.camera.full_name}</td>
                        <td>{item.earth_date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={8}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>ID Foto: {this.state.selectedItem.id}</Card.Title>
                  <Card.Text>
                    Fecha de la foto: {this.state.selectedItem.earth_date}
                    <p />
                    {/*Cámara: {this.state.selectedItem.camera.full_name}*/}
                  </Card.Text>
                  <Card.Img src={this.state.selectedItem.img_src}></Card.Img>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FotosNasa;
