import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { name, imagem, price, addClick, id, freeShipping } = this.props;
    return (
      <div data-testid="product" id={ id }>
        <Link to={ `/product/${id}` } data-testid="product-detail-link">
          <p>{ name }</p>
          <img src={ imagem } alt={ name } />
          {freeShipping && <p data-testid="free-shipping">Frete Grátis!</p>}
          <p>{ ` R$ ${parseFloat(price).toFixed(2)}` }</p>
        </Link>
        <button
          onClick={ addClick }
          type="button"
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  freeShipping: PropTypes.bool.isRequired,
};

export default ProductCard;
