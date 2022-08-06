import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery, getProductById } from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsSearch: [],
      inputSearch: '',
      searching: false,
      addCart: [],
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

  handleClickCart = async ({ target }) => {
    const { id } = target.parentNode;
    const prodCart = await getProductById(id);

    this.setState((prev) => ({
      addCart: [...prev.addCart, prodCart],
    }), () => {
      const { addCart } = this.state;
      localStorage.setItem('cart_items', JSON.stringify(addCart));
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
                id={ prod.id }
                addClick={ this.handleClickCart }
              />
            ))
          )}
      </div>
    );
  }
}
export default Home;
