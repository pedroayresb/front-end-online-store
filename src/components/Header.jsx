import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  componentDidMount() {
    window.addEventListener('storage', console.log('a'));
  }

  render() {
    return (
      <header style={ { display: 'flex', alignItems: 'baseline' } }>
        <Link to="/cart" data-testid="shopping-cart-button">
          <button type="button">Carrinho</button>
        </Link>
      </header>
    );
  }
}
