import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api'; //
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/" component={ Sidebar } />
          <Route exact path="/cart" component={ Cart } />
          {/* adicionei o exact no path do cart  */}
          <Route exact path="/product/:id" component={ Product } />
        </Switch>
      </BrowserRouter>
      <Sidebar />
    </>
  );
}
export default App;
