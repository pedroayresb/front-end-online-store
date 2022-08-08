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
          {productsPerCategories.map((prod, idKey) => (
            <ProductCard
              key={ idKey }
              name={ prod.title }
              imagem={ prod.thumbnail }
              price={ prod.price }
              addClick={ this.handleClickCart }
              id={ prod.id }
            />
            // <div key={ product.id } data-testid="product ">
            //   <Link
            //     data-testid="product-detail-link"
            //     to={ `/product/${product.id}` }
            //   >
            //     <img src={ product.thumbnail } alt={ product.title } />
            //     { product.title }
            //   </Link>
            // </div>
          ))}
        </section>
      </div>
    );
  }
}

export default Sidebar;
