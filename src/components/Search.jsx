// Requisito 5
import React from 'react';
import ProductCard from './ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { addItem } from '../services/local';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsSearch: [],
      inputSearch: '',
      searching: false,
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleClick = async (event) => {
    event.preventDefault();
    const { inputSearch } = this.state;
    console.log(inputSearch);
    const response = await getProductsFromCategoryAndQuery(inputSearch);
    const products = await response.results;
    this.setState({
      productsSearch: products,
      searching: true,
    });
  };

  handleClickCart = async ({ target }) => {
    const { id } = target.parentNode;
    const { productsSearch } = this.state;
    const prodCart = productsSearch.filter((product) => product.id === id);
    addItem(prodCart[0]);
  }

  render() {
    const { productsSearch, searching } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="input-search">
            <input
              type="text"
              data-testid="query-input"
              name="inputSearch"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Search
          </button>
        </form>
        {productsSearch.length === 0 && searching === true ? (
          <h1>Nenhum produto foi encontrado</h1>
        ) : (
          productsSearch.map((prod, idKey) => {
            const { shipping } = prod;
            return (<ProductCard
              key={ idKey }
              name={ prod.title }
              imagem={ prod.thumbnail }
              price={ prod.price }
              addClick={ this.handleClickCart }
              id={ prod.id }
              freeShipping={ shipping.free_shipping }
            />
            );
          })
        )}
      </div>
    );
  }
}
