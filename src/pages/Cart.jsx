import React, { Component } from 'react';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      total: 0,
    };
  }

  render() {
    const { cart, total } = this.state;
    console.log(total);
    if (cart.length === 0) {
      return (
        <div className="cart">
          <h1>Carrinho</h1>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <p>Tem compras no carrinho</p>
    );
  }
}
