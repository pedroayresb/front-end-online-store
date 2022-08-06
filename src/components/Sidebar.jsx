import React, { Component } from 'react';
import { getCategories } from '../services/api';
// REQUISITO 4
class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const categoriesObject = await getCategories();

    this.setState({ categories: categoriesObject });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        Categorias:
        <nav>
          {categories.map((categorie) => (
            <button type="button" data-testid="category" key={ categorie.id }>
              {categorie.name}
            </button>
          ))}
        </nav>
      </div>
    );
  }
}

export default Sidebar;
