import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import { Navbar, Container, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar  bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Zonawiki</Navbar.Brand>
        </Navbar>

        <Container>
          <Row>
            <Col sm={8}>
              <ProductList />
            </Col>
            <Col sm={4}>
              <ShoppingCart />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
