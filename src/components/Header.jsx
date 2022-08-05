import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        <button type="button">Carrinho</button>
      </Link>
    );
  }
}
