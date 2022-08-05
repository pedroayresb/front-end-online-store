import React from 'react';
import Header from '../components/Header';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
  }
}
export default Home;
