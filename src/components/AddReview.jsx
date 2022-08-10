import React from 'react';
import { addReview, readReview } from '../services/local';

export default class AddReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailInput: '',
      textAreaInput: '',
      radioInput: '',
      avaliation: [],
      invalidField: true,
    };
  }

  componentDidMount() {
    const location = window.location.href;
    const id = location.split('product/')[1];
    const reviews = readReview(id);
    if (reviews) {
      this.setState({ avaliation: reviews, id });
    }
  }

  validationInputs = () => {
    const { emailInput, radioInput } = this.state;
    const array = [emailInput, radioInput];
    return array.some((element) => element.length === 0);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

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
          { email: prevState.emailInput,
            comment: prevState.textAreaInput,
            rating: prevState.radioInput },
        ],
        emailInput: '',
        textAreaInput: '',
        radioInput: '',
      }), () => {
        this.toSave();
      });
    }
  };

  toSave = () => {
    const { id, avaliation } = this.state;
    addReview(id, avaliation);
  }

  render() {
    const { emailInput,
      textAreaInput, invalidField, avaliation } = this.state;
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
        {avaliation.map((aval, index) => (
          <div key={ index }>
            <p data-testid="review-card-email">{aval.email}</p>
            <p data-testid="review-card-rating">{aval.rating}</p>
            <p data-testid="review-card-evaluation">{aval.comment}</p>
          </div>
        ))}
      </section>
    );
  }
}
