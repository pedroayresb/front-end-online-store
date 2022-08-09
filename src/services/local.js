const KEY = 'cart_items';

if (!JSON.parse(localStorage.getItem(KEY))) {
  localStorage.setItem(KEY, JSON.stringify([]));
}
export const readItems = () => JSON.parse(localStorage.getItem(KEY));
export const saveItem = (item) => localStorage.setItem(KEY, JSON.stringify(item));
export const addItem = (item) => {
  if (item) {
    const cart = readItems();
    const freeShipping = item.shipping.free_shipping;
    const count = cart.reduce((acc, v) => ({ ...acc, [v.id]: (acc[v.id] || 0) + 1 }), {});
    let obj;
    if (count[item.id] === undefined) {
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
      obj = {
        id: item.id,
        count: count[item.id] + 1,
        title: item.title,
        price: item.price,
        thumbnail: item.thumbnail,
        maxQuantity: item.available_quantity,
        freeShipping,
      };
      const index = cart.findIndex((i) => i.id === item.id);
      cart[index] = obj;
      saveItem(cart);
    }
  }
};
export const removeItem = (item) => {
  const items = readItems();
  saveItem(items.filter((i) => i.id !== item.id));
};
export const clearCart = () => {
  localStorage.removeItem(KEY);
  localStorage.setItem(KEY, JSON.stringify([]));
};
