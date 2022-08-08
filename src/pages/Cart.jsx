import React, { Component } from 'react';
import CartProduct from '../components/CartProduct';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartItens: [],
    };
  }

  async componentDidMount() { // esse codigo cria um novo objeto unique, com os dados dos objetos juntamente com uma contagem de quantas vezes eles aparecem
    const NEG = -1;
    const count = cart.reduce((acc, v) => ({ ...acc, [v.id]: (acc[v.id] || 0) + 1 }), {});
    const fullObj = [];
    api.forEach((c) => {
      if (fullObj.indexOf(c.id) === NEG) {
        const obj = {
          id: c.id,
          count: count[c.id],
          title: c.title,
          price: c.price,
          thumbnail: c.thumbnail,
          maxQuantity: c.available_quantity,
        };
        fullObj.push(obj);
      }
    });
    const uniqueIds = [];
    const unique = fullObj.filter((element) => {
      const isDuplicate = uniqueIds.includes(element.id);
      if (!isDuplicate) {
        uniqueIds.push(element.id);
        return true;
      }
      return false;
    });
    this.setState({ cartItens: unique });
  }

  render() {
    const { cartItens } = this.state;
    if (cart.length === 0) {
      return (
        <div className="cart">
          <h1>Carrinho</h1>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <div className="cart">
        {cartItens.map((item, i) => (
          <CartProduct
            key={ i }
            productImage={ item.thumbnail }
            productName={ item.title }
            productPrice={ item.price }
            productQuantity={ item.count }
            available_quantity={ item.maxQuantity }
          />))}
      </div>
    );
  }
}
