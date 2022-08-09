import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
// import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const apiReturn = await getProductById(id);
    this.setState({
      product: apiReturn,
    });
  }

  render() {
    const { product } = this.state;
    const { title, thumbnail, price, shipping } = product;
    let freeShipping = false;
    if (shipping !== undefined) {
      freeShipping = shipping.free_shipping;
    }
    return (
      <div>
        <Header />
        <h1 data-testid="product-detail-name">{ title }</h1>
        {freeShipping && <p data-testid="free-shipping">Frete Grátis!</p>}
        <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
        <span data-testid="product-detail-price">{ price }</span>
      </div>
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
