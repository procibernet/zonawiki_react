import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

const styles = {
  products_styles: {
    display: 'flex'
  }
};

class ProductList extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      products: [
        { id: 1, name: "Hipster Ultimate", price: 299, image: "https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg" },
        { id: 2, name: "On Motion Live", price: 99, image: "https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404_1280.jpg" },
        { id: 3, name: "Underground Max", price: 149, image: "https://cdn.pixabay.com/photo/2019/02/13/19/23/t-shirt-3995093_1280.png" },
      ]
    }
  }

  render() {
    return (
      <div style={styles.products_styles}>
        {this.state.products.map(product =>
          <Card style={{ width: '19rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Button variant="primary">${product.price}</Button>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }

  addToCart(product) {

  }
}

export default ProductList;
