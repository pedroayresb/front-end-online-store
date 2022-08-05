export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(...parameters) {
  if (parameters.length > 1) {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${parameters[0]}&q=${parameters[1]}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${parameters}}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
