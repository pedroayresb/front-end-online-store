import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class CartProduct extends Component {
  render() {
    const { productImage,
      productName,
      productPrice,
      productQuantity,
      maxQuantity } = this.props;
    const price = `R$ ${parseFloat(productPrice * productQuantity).toFixed(2)}`;
    return (
      <div
        data-testid="product-add-to-cart"
        className="CartProduct"
        style={ { display: 'flex' } }
      >
        <button type="button" className="CartProduct__remove"> X </button>
        <img scr={ productImage } alt={ productName } />
        <p data-testid="shopping-cart-product-name">{ productName }</p>
        <button type="button" data-testid="product-decrease-quantity"> - </button>
        <p data-testid="shopping-cart-product-quantity">{ productQuantity }</p>
        <p>
          `Quantidade maxima:
          $
          { maxQuantity }
          `
        </p>
        <button type="button" data-testid="product-increase-quantity"> + </button>
        <p>{ price }</p>
      </div>
    );
  }
}

CartProduct.propTypes = {
  productImage: propTypes.string.isRequired,
  productName: propTypes.string.isRequired,
  productPrice: propTypes.number.isRequired,
  productQuantity: propTypes.number.isRequired,
  maxQuantity: propTypes.number.isRequired,
};
