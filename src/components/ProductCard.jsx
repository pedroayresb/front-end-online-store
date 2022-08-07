import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { name, imagem, price } = this.props;
    return (
      <div data-testid="product">
        <p>{ name }</p>
        <img src={ imagem } alt={ name } />
        <p>{ `R$ ${price}` }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
