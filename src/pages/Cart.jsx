import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <h1>Carrinho</h1>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}
