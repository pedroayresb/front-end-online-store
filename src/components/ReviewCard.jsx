import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class ReviewCard extends Component {
  render() {
    const { name, imagem, price, count, freeShipping } = this.props;
    return (
      <div data-testid="product" style={ { display: 'flex' } }>
        <img src={ imagem } alt={ name } />
        <p>{ name }</p>
        {freeShipping ? <p>Frete grátis</p> : null}
        <p>{ ` x${count} ` }</p>
        <p>{ ` R$ ${parseFloat(price * count).toFixed(2)}` }</p>
      </div>
    );
  }
}

ReviewCard.propTypes = {
  name: propTypes.string.isRequired,
  imagem: propTypes.string.isRequired,
  count: propTypes.number.isRequired,
  price: propTypes.number.isRequired,
  freeShipping: propTypes.bool.isRequired,
};
