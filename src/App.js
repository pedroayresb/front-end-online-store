import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Payments from './pages/Payments';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
        <Route exact path="/product/:id" component={ Product } />
        <Route exact path="/payment" component={ Payments } />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
