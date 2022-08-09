import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class PaymentType extends Component {
  render() {
    const { onInputChange } = this.props;
    return (
      <form>
        <article name="paymentType">
          <label htmlFor="paymentType">
            Forma de pagamento:
            <input
              type="radio"
              name="paymentType"
              id="bank-slip"
              data-testid="ticket-payment"
              value="Boleto"
              onChange={ onInputChange }
              selected
            />
            Boleto
            <input
              type="radio"
              name="paymentType"
              id="credit-card"
              data-testid="visa-payment"
              value="Visa"
              onChange={ onInputChange }
            />
            Visa
            <input
              type="radio"
              name="paymentType"
              id="credit-card"
              data-testid="master-payment"
              value="Master"
              onChange={ onInputChange }
            />
            Master
            <input
              type="radio"
              name="paymentType"
              id="credit-card"
              data-testid="elo-payment"
              value="Elo"
              onChange={ onInputChange }
            />
            Elo
          </label>
        </article>
      </form>
    );
  }
}

PaymentType.propTypes = {
  onInputChange: propTypes.func.isRequired,
};
