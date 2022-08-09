import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    const { count } = this.props;
    return (
      <header style={ { display: 'flex', alignItems: 'baseline' } }>
        <Link to="/cart" data-testid="shopping-cart-button">
          <button type="button">Carrinho</button>
        </Link>
        <p data-testid="shopping-cart-size">{ count }</p>
      </header>
    );
  }
}

Header.propTypes = {
  count: propTypes.number.isRequired,
};
