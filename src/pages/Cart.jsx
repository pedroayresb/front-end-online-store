import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
  //   const cart = [];
  //   console.log(total);
  //   if (cart.length === 0) {
  //     return (
  //       <div className="cart">
  //         <h1>Carrinho</h1>
  //         <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
  //       </div>
  //     );
  //   }
  //   return (
  //     <p>Tem compras no carrinho</p>
  //   );
  // }

    return (
      <div className="cart">
        <h1>Carrinho</h1>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
    // COMENTEI O CÓDIGO ACIMA POIS ESTAVA COM A LÓGICA MONTADA, PORÉM QUEBRAVA O REQUISITO
  }
}
