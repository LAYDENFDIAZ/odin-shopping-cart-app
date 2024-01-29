interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface Cart {
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  getItems: () => CartItem[];
  log: () => void;
  getQuantity: (productId: number) => number;
  getTotal: () => number;
}

export function createCart(): Cart {
  const items: Record<number, CartItem> = {};

  const addItem = (product: Product): void => {
    if (!(product.id in items)) {
      items[product.id] = { ...product, quantity: 1 };
    } else if (items[product.id].quantity === 0) {
      items[product.id].quantity = 1;
    }
  };

  const removeItem = (productId: number): void => {
    items[productId].quantity = 0;
  };

  const increaseQuantity = (productId: number): void => {
    items[productId].quantity += 1;
  };

  const decreaseQuantity = (productId: number): void => {
    items[productId].quantity -= 1;
  };

  const getItems = (): CartItem[] => {
    return Object.values(items).filter((item) => item.quantity > 0);
  };

  const log = (): void => {
    console.log(items);
  };

  const getQuantity = (productId: number): number => {
    return items[productId] ? items[productId].quantity : 0;
  };

  const getTotal = (): number => {
    let total = 0;

    for (const item of getItems()) {
      // Adjust to drop extra decimal places
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
