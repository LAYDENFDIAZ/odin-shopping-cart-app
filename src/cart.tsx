export function createCart() {
  let items = [];

  const addItem = (product) => {
    items.push(product);
  };

  const removeItem = (productId) => {
    items = items.filter((product) => {
      product.id !== product;
    });
  };

  const getItems = () => {
    return [...new Set(items)];
  };

  const log = () => {
    console.log(items);
  };

  const getQuantity = (productId) => {
    let quantity = 0;

    for (const item of items) {
      if (item.id === productId) {
        quantity++;
      }
    }

    return quantity;
  };

  const getTotal = () => {
    let total = 0;

    for (const item of items) {
      total += item.price;
    }

    return total;
  };

  return { addItem, removeItem, log, getItems, getQuantity, getTotal };
}
