export function createCart() {
  let items = {};

  const addItem = (product) => {
    if (!(product.id in items)) {
      items[product.id] = { ...product, quantity: 1 };
    } else if (items[product.id].quantity === 0) {
      items[product.id].quantity = 1;
    }
  };

  const removeItem = (productId) => {
    items[productId].quantity = 0;
  };

  const increaseQuantity = (productId) => {
    items[productId].quantity += 1;
  };

  const decreaseQuantity = (productId) => {
    items[productId].quantity -= 1;
  };

  const getItems = () => {
    return Object.values(items).filter((item) => {
      return item.quantity > 0;
    });
  };

  const log = () => {
    console.log(items);
  };

  const getQuantity = (productId) => {
    return items[productId] ? items[productId].quantity : 0;
  };

  const getTotal = () => {
    let total = 0;

    for (const item of getItems()) {
      //adjust to drop extra decimal places
      total += item.price * item.quantity;
    }

    return total;
  };

  return {
    addItem,
    removeItem,
    log,
    getItems,
    getQuantity,
    getTotal,
    increaseQuantity,
    decreaseQuantity,
  };
}
