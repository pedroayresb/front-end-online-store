import React, { Component } from 'react';
import Loading from './Loading';
import ProductCard from './ProductCard';
import { getCategories,
  getProductsFromCategoryAndQuery } from '../services/api';
import { addItem } from '../services/local';

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

  handleClickCart = async ({ target }) => {
    const { id } = target.parentNode;
    console.log(id);
    const { productsPerCategories } = this.state;
    const prodCart = productsPerCategories.filter((product) => product.id === id);
    addItem(prodCart[0]);
  }

  handleClick = ({ target: { id } }) => {
    this.setState({ loading: true }, async () => {
      const response = await getProductsFromCategoryAndQuery(id);
      const data = await response.results;
      this.setState({ productsPerCategories: data, loading: false });
    });
  }

  render() {
    const { categories, productsPerCategories, loading } = this.state;
    console.log(loading);
    return (
      <div>
        Categorias:
        <nav>
          {categories.map((categorie) => (
            <button
              onClick={ this.handleClick }
              name={ categorie.name }
              id={ categorie.id }
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
          {productsPerCategories.map((prod, idKey) => (
            <ProductCard
              key={ idKey }
              name={ prod.title }
              imagem={ prod.thumbnail }
              price={ prod.price }
              addClick={ this.handleClickCart }
              id={ prod.id }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Sidebar;
