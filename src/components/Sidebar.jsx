import React, { Component } from 'react';
import propTypes from 'prop-types';
import Loading from './Loading';
import ProductCard from './ProductCard';
import { getCategories,
  getProductsFromCategoryAndQuery } from '../services/api';
import { addItem } from '../services/local';

export default class Sidebar extends Component {
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
    const { addCount } = this.props;
    const { id } = target.parentNode;
    const { productsPerCategories } = this.state;
    const prodCart = productsPerCategories.filter((product) => product.id === id);
    addItem(prodCart[0]);
    addCount();
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
          {productsPerCategories.map((prod, idKey) => {
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
          })}
        </section>
      </div>
    );
  }
}

Sidebar.propTypes = {
  addCount: propTypes.func.isRequired,
};
