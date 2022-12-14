const KEY = 'cart_items';

if (!JSON.parse(localStorage.getItem(KEY))) {
  localStorage.setItem(KEY, JSON.stringify([]));
}
export const readItems = () => JSON.parse(localStorage.getItem(KEY));
export const saveItem = (item) => localStorage.setItem(KEY, JSON.stringify(item));
export const addItem = (item) => {
  if (item) {
    const cart = readItems();
    const isInCart = cart.find((cartItem) => cartItem.id === item.id);
    const freeShipping = item.shipping.free_shipping;
    let obj;
    if (isInCart === undefined) {
      obj = {
        id: item.id,
        count: 1,
        title: item.title,
        price: item.price,
        thumbnail: item.thumbnail,
        maxQuantity: item.available_quantity,
        freeShipping,
      };
      saveItem([...cart, obj]);
    } else {
      const index = cart.findIndex((i) => i.id === item.id);
      obj = {
        id: item.id,
        count: cart[index].count += 1,
        title: item.title,
        price: item.price,
        thumbnail: item.thumbnail,
        maxQuantity: item.available_quantity,
        freeShipping,
      };
      cart[index] = obj;
      saveItem(cart);
    }
  }
};
export const removeItem = (item) => {
  const items = readItems();
  saveItem(items.filter((i) => i.id !== item.id));
};

export const saveReview = (id, r) => localStorage.setItem(`${id}`, JSON.stringify(r));
export const readReview = (id) => JSON.parse(localStorage.getItem(`${id}`));
export const addReview = (id, array) => {
  const avaliation = readReview(id);
  array.forEach((item) => {
    if (avaliation === null) {
      saveReview(id, [item]);
    } else {
      saveReview(id, [...avaliation, item]);
    }
  });
};

export const clearCart = () => {
  localStorage.removeItem(KEY);
  localStorage.setItem(KEY, JSON.stringify([]));
};
