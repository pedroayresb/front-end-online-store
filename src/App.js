import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api'; //
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
// import Sidebar from './components/Sidebar';

function App() {
  return (
<<<<<<< HEAD
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ Cart } />
          <Route exact path="/product/:id" component={ Product } />
        </Switch>
      </BrowserRouter>
      <Sidebar />
    </>
=======
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
        <Route exact path="/product/:id" component={ Product } />
      </Switch>
    </BrowserRouter>
>>>>>>> c22f2777ae2f3ed073ed9d0ba591b9fce6d5a82c
  );
}
export default App;
