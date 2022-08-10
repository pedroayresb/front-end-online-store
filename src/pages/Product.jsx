import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
// import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import { addItem, readItems } from '../services/local';
import AddReview from '../components/AddReview';
// teste
export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  async componentDidMount() {
    const cart = readItems();
    if (cart) {
      const count = cart.reduce((acc, item) => acc + item.count, 0);
      this.setState({ count });
    }
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const apiReturn = await getProductById(id);
    this.setState({
      product: apiReturn,
    });
  }

  handleClickCart = () => {
    const { product } = this.state;
    addItem(product);
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    const { product, count } = this.state;
    const { title, thumbnail, price, shipping } = product;
    let freeShipping = false;
    if (shipping !== undefined) {
      freeShipping = shipping.free_shipping;
    }
    return (
      <section>
        <div>
          <Header count={ count } />
          <h1 data-testid="product-detail-name">{title}</h1>
          {freeShipping && <p data-testid="free-shipping">Frete Grátis!</p>}
          <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
          <span data-testid="product-detail-price">{price}</span>
          <button
            onClick={ this.handleClickCart }
            type="button"
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao carrinho
          </button>
        </div>
        <AddReview />
      </section>
    );
  }
}
Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
