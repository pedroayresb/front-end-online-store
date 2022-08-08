import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class CartProduct extends Component {
  constructor(props) {
    super(props);
    const { productQuantity, productPrice, maxQuantity } = this.props;
    this.state = {
      quantity: productQuantity,
      price: productQuantity * productPrice,
      maxQuantity,
    };
    this.handleIncreaseQuantity = this.handleIncreaseQuantity.bind(this);
    this.handleDecreaseQuantity = this.handleDecreaseQuantity.bind(this);
  }

  handleIncreaseQuantity = () => {
    const { quantity, maxQuantity } = this.state;
    const { productPrice } = this.props;
    if (quantity <= maxQuantity) {
      this.setState({
        quantity: quantity + 1,
      }, () => {
        this.setState({ price: quantity * productPrice });
      });
    }
  }

  handleDecreaseQuantity = () => {
    const { quantity, maxQuantity } = this.state;
    const { productPrice } = this.props;
    if (quantity <= maxQuantity) {
      this.setState({
        quantity: quantity - 1,
      }, () => {
        this.setState({ price: quantity * productPrice });
      });
    }
  }

  render() {
    const { productImage,
      productName } = this.props;
    const { quantity, price, maxQuantity } = this.state;
    return (
      <div
        data-testid="product-add-to-cart"
        className="CartProduct"
        style={ { display: 'flex' } }
      >
        <button
          type="button"
          className="CartProduct__remove"
          data-testid="remove-product"
        >
          X
        </button>
        <img scr={ productImage } alt={ productName } />
        <p data-testid="shopping-cart-product-name">{ productName }</p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.handleDecreaseQuantity }
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <p>
          `Quantidade maxima:
          $
          { maxQuantity }
          `
        </p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.handleIncreaseQuantity }
        >
          +
        </button>
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
