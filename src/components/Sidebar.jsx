import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Loading from './Loading';

class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      productsPerCategories: [],
      loading: false,
    };
  }

  async componentDidMount() {
    const categoriesObject = await getCategories();

    this.setState({ categories: categoriesObject });
  }

  handleClick = ({ target: { name } }) => {
    this.setState({ loading: true }, async () => {
      const response = await getProductsFromCategoryAndQuery(name);
      const data = await response.results;
      this.setState({ productsPerCategories: data, loading: false });
    });
  }

  render() {
    const { categories, productsPerCategories, loading } = this.state;
    return (
      <div>
        Categorias:
        <nav>
          {categories.map((categorie) => (
            <button
              onClick={ this.handleClick }
              name={ categorie.name }
              type="button"
              data-testid="category"
              key={ categorie.id }
            >
              {categorie.name}
            </button>
          ))}
        </nav>
        <section>
          {loading && <Loading /> }
          {productsPerCategories.map((product) => (
            <div data-testid="product" key={ product.id }>
              <img src={ product.thumbnail } alt={ product.title } />
              {product.title}
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default Sidebar;
