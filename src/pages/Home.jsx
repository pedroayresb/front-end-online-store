import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
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
  }

  handleClick = async (event) => {
    event.preventDefault();
    const { inputSearch } = this.state;
    const response = await getProductsFromCategoryAndQuery(inputSearch);
    const products = await response.results;
    this.setState({
      productsSearch: products,
      searching: true,
    });
  }

  render() {
    const { productsSearch, inputSearch, searching } = this.state;
    return (
      <div>
        <Header />
        {inputSearch.length === 0
          ? (
            <h1 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h1>
          )
          : null}
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
        {productsSearch.length === 0 && searching === true
          ? (
            <h1>
              Nenhum produto foi encontrado
            </h1>
          )
          : (
            productsSearch.map((prod, idKey) => (
              <ProductCard
                key={ idKey }
                name={ prod.title }
                imagem={ prod.thumbnail }
                price={ prod.price }
              />
            ))
          )}
      </div>
    );
  }
}
export default Home;
