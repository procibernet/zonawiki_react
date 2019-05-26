import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      cart: []
    }
  }

  render() {
    return (
      <Card>
        <Card.Header>Shopping Cart</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
            {this.state.cart.map(product =>
              <ul key={product.id}>
                <li>{product.name}</li>
                <li className="text-right">${product.price}</li>
                <li className="text-right">
                  <Button bsSize="xsmall" bsStyle="danger" onClick={() => this.removeFromCart(product)}></Button>
                </li>
              </ul>
            )}
            </p>
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

  }
}

export default ShoppingCart;
