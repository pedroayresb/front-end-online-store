import React, { Component } from 'react';
import { readItems } from '../services/local';

export default class PriceTotal extends Component {
  constructor() {
    super();
    this.state = {
      cartPrices: [],
    };
  }

  componentDidMount() {
    this.readStorage();
  }

  readStorage = () => {
    const cart = readItems();
    this.setState({ cartPrices: cart });
  }

  render() {
    const { cartPrices } = this.state;
    const price = cartPrices.reduce((acc, item) => acc + item.price, 0);
    const count = cartPrices.reduce((acc, item) => acc + item.count, 0);
    return (
      <p
        className="price-total"
      >
        { `TOTAL:  R$ ${parseFloat(price * count).toFixed(2)}` }
      </p>
    );
  }
}
