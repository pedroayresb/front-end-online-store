import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Search from '../components/Search';
import { readItems } from '../services/local';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.addCount = this.addCount.bind(this);
  }

  componentDidMount() {
    const cart = readItems();
    if (cart !== null) {
      const count = cart.reduce((acc, item) => acc + item.count, 0);
      this.setState({ count });
    }
  }

  addCount() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <div className="cart-container">
          <Header count={ count } />
        </div>
        <div>
          <Search addCount={ this.addCount } />
          <Sidebar addCount={ this.addCount } />
        </div>
      </div>
    );
  }
}
