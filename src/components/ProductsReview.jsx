import React, { Component } from 'react';
import ReviewCard from './ReviewCard';
import PriceTotal from './PriceTotal';
import { readItems } from '../services/local';

class ProductsReview extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    const cart = readItems();
    this.setState({ cart });
  }

  render() {
    const { cart } = this.state;
    return (
      <div className="products-review">
        {cart.map((item, i) => (
          <ReviewCard
            key={ i }
            name={ item.title }
            imagem={ item.thumbnail }
            price={ item.price }
            count={ item.count }
            freeShipping={ item.freeShipping }
          />
        ))}
        <PriceTotal />
      </div>
    );
  }
}

export default ProductsReview;
