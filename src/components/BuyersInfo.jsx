import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class BuyersInfo extends Component {
  render() {
    const { onInputChange, isFull } = this.props;
    return (
      <div className="buyers-info">
        <form>
          <input
            type="text"
            name="name"
            placeholder="Nome Completo"
            data-testid="checkout-fullname"
            onChange={ onInputChange }
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            data-testid="checkout-email"
            onChange={ onInputChange }
          />
          <input
            type="text"
            name="CPF"
            placeholder="CPF"
            data-testid="checkout-cpf"
            onChange={ onInputChange }
          />
          <input
            type="text"
            name="phone"
            placeholder="Telefone"
            data-testid="checkout-phone"
            onChange={ onInputChange }
          />
          <input
            type="text"
            name="CEP"
            placeholder="CEP"
            data-testid="checkout-cep"
            onChange={ onInputChange }
          />
          <input
            type="text"
            name="address"
            placeholder="Endereço"
            data-testid="checkout-address"
            onChange={ onInputChange }
          />
          {isFull ? <h1 data-testid="error-msg">Campos inválidos</h1> : null}
        </form>
      </div>
    );
  }
}

BuyersInfo.propTypes = {
  onInputChange: propTypes.func.isRequired,
  isFull: propTypes.bool.isRequired,
};
