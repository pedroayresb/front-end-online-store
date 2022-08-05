import React from 'react';
import './App.css';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

function App() {
  console.log(getCategories());
  console.log(getProductsFromCategoryAndQuery('Agro'));
  return (
    <h1>hello world</h1>
  );
}

export default App;
