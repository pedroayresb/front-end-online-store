import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class CartProduct extends Component {
  constructor(props) {
    super(props);
    const { productQuantity, productPrice, maxQuantity, id } = this.props;
    this.state = {
      quantity: productQuantity,
      price: productQuantity * productPrice,
      id,
      maxQuantity,
    };
    this.handleIncreaseQuantity = this.handleIncreaseQuantity.bind(this);
    this.handleDecreaseQuantity = this.handleDecreaseQuantity.bind(this);
    this.remover = this.remover.bind(this);
  }

  handleIncreaseQuantity = () => {
    const { quantity, maxQuantity, id } = this.state;
    const { productPrice, addStorage } = this.props;
    if (quantity < maxQuantity) {
      this.setState({
        quantity: quantity + 1,
        price: parseFloat((quantity + 1) * productPrice).toFixed(2),
      }, () => {
        addStorage(id);
      });
    }
  }

  handleDecreaseQuantity = () => {
    const { quantity, maxQuantity, id } = this.state;
    const { productPrice, removeStorage } = this.props;
    if (quantity - 1 === 0) {
      this.setState({ quantity: 1, price: productPrice });
    } else if (quantity <= maxQuantity) {
      this.setState({
        quantity: quantity - 1,
        price: parseFloat((quantity - 1) * productPrice).toFixed(2),
      }, () => {
        removeStorage(id);
      });
    }
  }

  remover = () => {
    const { removeProduct } = this.props;
    removeProduct();
  }

  render() {
    const { productImage,
      productName,
      removeProduct,
      freeShipping } = this.props;
    const { quantity, price, maxQuantity } = this.state;
    const isQuant = `${quantity}/(${maxQuantity})`;
    const isPrice = `R$ ${parseFloat(price).toFixed(2)}`;
    const style = {
      display: 'flex',
      justifyContent: 'space-between',
    };
    return (
      <div
        data-testid="product-add-to-cart"
        className="CartProduct"
        style={ style }
      >
        <button
          type="button"
          className="CartProduct__remove"
          data-testid="remove-product"
          onClick={ removeProduct }
        >
          X
        </button>
        <img scr={ productImage } alt={ productName } />
        {freeShipping ? <p data-testid="free-shipping">Frete gratis</p> : null}
        <p data-testid="shopping-cart-product-name">{ productName }</p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.handleDecreaseQuantity }
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{ isQuant }</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.handleIncreaseQuantity }
        >
          +
        </button>
        <p id="prices">{ isPrice }</p>
      </div>
    );
  }
}

CartProduct.propTypes = {
  productImage: propTypes.string.isRequired,
  productName: propTypes.string.isRequired,
  productPrice: propTypes.number.isRequired,
  productQuantity: propTypes.number.isRequired,
  id: propTypes.string.isRequired,
  maxQuantity: propTypes.number.isRequired,
  removeProduct: propTypes.func.isRequired,
  addStorage: propTypes.func.isRequired,
  removeStorage: propTypes.func.isRequired,
  freeShipping: propTypes.bool.isRequired,
};
