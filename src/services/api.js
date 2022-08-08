export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(...parameters) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${parameters}}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function getProductById(Id) {
  const target = `https://api.mercadolibre.com/items/${Id}`;
  const response = await fetch(target);
  const data = await response.json();
  return data;
}
