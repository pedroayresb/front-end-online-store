import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Loading from './Loading';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

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
            <div key={ product.id } data-testid="product ">
              <Link
                data-testid="product-detail-link"
                to={ `/product/${product.id}` }
              >
                <img src={ product.thumbnail } alt={ product.title } />
                { product.title }
              </Link>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default Sidebar;
