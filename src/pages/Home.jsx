import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Search from '../components/Search';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <div className="cart-container">
          <Header />
        </div>
        <div>
          <Search />
          <Sidebar />
        </div>
      </div>
    );
  }
}
export default Home;
