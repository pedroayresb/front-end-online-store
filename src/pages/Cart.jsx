import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartProduct from '../components/CartProduct';
import Loading from '../components/Loading';
import { readItems, removeItem, saveItem } from '../services/local';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartItens: [],
    };
    this.removeProduct = this.removeProduct.bind(this);
  }

  async componentDidMount() {
    const cart = readItems();
    this.setState({ cartItens: cart });
  }

  removeProduct = (item) => () => {
    const { cartItens } = this.state;
    this.setState({ loading: true }, () => {
      const filtered = cartItens.filter((i) => i.id !== item.id);
      removeItem(item);
      this.setState({ loading: false, cartItens: filtered });
    });
  }

  addStorage = (item) => {
    const localStorage = readItems();
    const index = localStorage.findIndex((i) => i.id === item);
    localStorage[index].count += 1;
    saveItem(localStorage);
  }

  removeStorage = (item) => {
    const localStorage = readItems();
    const index = localStorage.findIndex((i) => i.id === item);
    localStorage[index].count -= 1;
    saveItem(localStorage);
  }

  render() {
    const { cartItens, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    if (cartItens.length === 0) {
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
            id={ item.id }
            removeProduct={ this.removeProduct(item) }
            productImage={ item.thumbnail }
            productName={ item.title }
            productPrice={ item.price }
            productQuantity={ item.count }
            maxQuantity={ item.maxQuantity }
            freeShipping={ item.freeShipping }
            addStorage={ this.addStorage }
            removeStorage={ this.removeStorage }
          />))}
        <Link to="/payment" data-testid="checkout-products">Finalizar Compra</Link>
      </div>
    );
  }
}
