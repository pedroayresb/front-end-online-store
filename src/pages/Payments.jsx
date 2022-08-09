import React, { Component } from 'react';
import propTypes from 'prop-types';
import ProductsReview from '../components/ProductsReview';
import BuyersInfo from '../components/BuyersInfo';
import PaymentType from '../components/PaymentType';
import { clearCart } from '../services/local';

export default class Payments extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      CPF: '',
      phone: '',
      CEP: '',
      address: '',
      paymentType: '',
    };
  }

  validation = () => {
    const { name, email, CPF, phone, CEP, address, paymentType } = this.state;
    const array = [name, email, CPF, phone, CEP, address, paymentType];
    return array.some((item) => item === '');
  }

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => {
      this.setState({
        isFull: this.validation(),
      });
    });
  }

  onClick = () => {
    if (this.validation()) {
      this.setState({ isFull: false });
    } else {
      const { history } = this.props;
      clearCart();
      history.push('/');
    }
  }

  render() {
    const { isFull } = this.state;
    return (
      <div className="payment">
        <ProductsReview />
        <BuyersInfo onInputChange={ this.onInputChange } isFull={ isFull } />
        <PaymentType onInputChange={ this.onInputChange } />
        <button
          type="button"
          data-testid="checkout-btn"
          onClick={ this.onClick }
        >
          Finalizar Compra
        </button>
      </div>
    );
  }
}

Payments.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};
