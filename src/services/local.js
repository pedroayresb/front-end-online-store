const KEY = 'cart_items';

if (!JSON.parse(localStorage.getItem(KEY))) {
  localStorage.setItem(KEY, JSON.stringify([]));
}
export const readItems = () => JSON.parse(localStorage.getItem(KEY));
const saveItem = (item) => localStorage.setItem(KEY, JSON.stringify(item));
export const addItem = (item) => {
  if (item) {
    const items = readItems();
    saveItem([...items, item]);
  }
};
export const removeItem = (item) => {
  const items = readItems();
  saveItem(items.filter((i) => i.id !== item.id));
};
