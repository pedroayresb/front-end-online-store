import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
// REQUISITO 4
class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      productsPerCategories: [],
    };
  }

  async componentDidMount() {
    const categoriesObject = await getCategories();

    this.setState({ categories: categoriesObject });
  }

  handleClick = async ({ target: { name } }) => {
    const response = await getProductsFromCategoryAndQuery(name);
    const data = await response.results;
    this.setState({ productsPerCategories: data });
  }

  render() {
    const { categories, productsPerCategories } = this.state;
    console.log(productsPerCategories);
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
