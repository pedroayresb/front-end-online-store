import React from 'react';

export default class AddReview extends React.Component {
  constructor() {
    super();

    this.state = {

      emailInput: '',
      textAreaInput: '',
      radioInput: '',
      avaliation: [],
      invalidField: true,
    };
  }

  validationInputs = () => {
    const { emailInput, radioInput } = this.state;
    const array = [emailInput, radioInput];
    return array.some((element) => element.length === 0);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    // const value = target.type === 'radio' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      this.setState({ invalidField: this.validationInputs() });
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    if (!this.validationInputs()) {
      this.setState((prevState) => ({
        avaliation: [
          ...prevState.avaliation,
          prevState.emailInput,
          prevState.textAreaInput,
        ],
        emailInput: '',
        textAreaInput: '',

      }));
    }
  };

  render() {
    const { emailInput,
      textAreaInput, avaliation, invalidField, radioInput } = this.state;
    console.log(radioInput);
    console.log(avaliation);
    return (
      <section>
        <h1> Avaliações</h1>
        <form>
          <label htmlFor="email-input">
            Email:
            <input
              autoComplete="off"
              data-testid="product-detail-email"
              id="email-input"
              name="emailInput"
              type="email"
              value={ emailInput }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="1">
            <input
              data-testid="1-rating"
              type="radio"
              name="radioInput"
              value="1"
              id="1"
              onChange={ this.handleChange }
            />
            1
          </label>
          <label htmlFor="2">
            <input
              data-testid="2-rating"
              type="radio"
              name="radioInput"
              value="2"
              id="2"
              onChange={ this.handleChange }
            />
            2
          </label>
          <label htmlFor="3">
            <input
              data-testid="3-rating"
              type="radio"
              name="radioInput"
              value="3"
              id="3"
              onChange={ this.handleChange }
            />
            3
          </label>
          <label htmlFor="4">
            <input
              data-testid="4-rating"
              type="radio"
              name="radioInput"
              value="4"
              onChange={ this.handleChange }
              id="4"
            />
            4
          </label>
          <label htmlFor="5">
            <input
              data-testid="5-rating"
              type="radio"
              name="radioInput"
              value="5"
              id="5"
              onChange={ this.handleChange }
            />
            5
          </label>

          <textarea
            required
            name="textAreaInput"
            data-testid="product-detail-evaluation"
            onChange={ this.handleChange }
            value={ textAreaInput }
          />
          <button
            onClick={ this.handleClick }
            type="button"
            data-testid="submit-review-btn"
          >
            Avaliar
          </button>
        </form>
        {invalidField && <p data-testid="error-msg">Campos inválidos</p>}
        {!invalidField && avaliation.map((aval, index) => <p key={ index }>{aval}</p>)}
      </section>
    );
  }
}
