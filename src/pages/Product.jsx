import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
// import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import AddReview from '../components/AddReview';

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
    const { title, thumbnail, price } = product;

    return (
      <section>
        <div>
          <h1>TESTE</h1>
          <Header />
          <h1 data-testid="product-detail-name">{ title }</h1>
          <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
          <span data-testid="product-detail-price">{ price }</span>
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
