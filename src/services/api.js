export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(...parameters) {
  if (parameters.length === 2) {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${parameters[0]}&q=${parameters[1]}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }
  if (parameters[0].includes('MLB')) {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${parameters}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${parameters}`;
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
