import React, { Component } from 'react';
import { Card, Button, Table } from 'react-bootstrap';
import store from '../store'

class ShoppingCart extends Component {
  constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      cart: []
    }

    store.subscribe(() => {
      this.setState({
        cart: store.getState().cart
      });
    });
  }

  render() {
    return (
      <Card>
        <Card.Header>Shopping Cart</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <Table striped bordered hover variant="dark">
              <tbody>
                {this.state.cart.map(product =>
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>
                      <Button
                        onClick={() => this.removeFromCart(product)}
                        variant="outline-danger"
                        size="sm"
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
            <footer >
              Total:
                ${this.state.cart.reduce((sum, product) => sum + product.price, 0)}
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    )
  }

  removeFromCart(product) {
    store.dispatch({
      type: "REMOVE_PRODUCT",
      product: product
    });
  }
}

export default ShoppingCart;
