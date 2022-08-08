import React, { Component } from 'react';
// import propTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { getProductById } from '../services/api';
import Header from '../components/Header';

export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const apiReturn = await getProductById(id);
    this.setState({
      product: apiReturn,
    });
  }
  
  render() {
    const { product } = this.state;
    const { title, thumbnail, price } = product;

    return (
      <div>
        <Header />
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
        <span data-testid="product-detail-price">{ price }</span>
      </div>
    );
  }
}
