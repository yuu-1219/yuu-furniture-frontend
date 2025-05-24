import { createContext, useState, useContext } from "react";

import { products } from "../constants/products";

// Context を作成
const CartContext = createContext();

// Provider を定義
export function CartProvider({ children }) {
  const [cart, setCart] = useState({
    cartId: null,
    userId: null,
    items: [],
    totalQty: 0,
    totalPrice: 0,
    updatedAt: null
  });

  const addToCart = (productId, color, qty) => {
    const product = products.find(c => c.productId === productId);

    const existingItemIndex = cart.items.findIndex(
      c => c.productId === productId && c.color === color
    );

    let updatedItems;

    if (existingItemIndex !== -1) {
      updatedItems = [...cart.items];
      updatedItems[existingItemIndex].quantity += qty;
    } else {
      updatedItems = [...cart.items, { productId: productId, color: color, quantity: qty }];
    }

    setCart({
      ...cart,
      items: updatedItems,
      totalQty: cart.totalQty + qty,
      totalPrice: cart.totalPrice + qty * product.price,
      updatedAt: new Date().toISOString()
    });
  };


  const removeFromCart = (productId, color) => {
    const targetProduct = products.find(c => c.productId === productId);

    const targetItem = cart.items.find(
      c => c.productId === productId && c.color === color
    );
    // if (!targetItem) return;

    const updatedItems = cart.items.filter(
      c => !(c.productId === productId && c.color === color)
    );

    setCart({
      ...cart,
      items: updatedItems,
      totalQty: cart.totalQty - targetItem.quantity,
      totalPrice: cart.totalPrice - targetProduct.price * targetItem.quantity,
      updatedAt: new Date().toISOString()
    });
  };

  const incrementItem = (productId, color) => {
    const targetProduct = products.find(c => c.productId === productId);

    const updatedItems = cart.items.map(c => {
      if (c.productId === productId && c.color === color) {
        return { ...c, quantity: c.quantity + 1 };
      }
      return c;
    });

    const targetItem = cart.items.find(c => c.productId === productId && c.color === color);
    // if (!item) return;

    setCart({
      ...cart,
      items: updatedItems,
      totalQty: cart.totalQty + 1,
      totalPrice: cart.totalPrice + targetProduct.price,
      updatedAt: new Date().toISOString()
    });
  };

  const decrementItem = (productId, color) => {
    const targetProduct = products.find(c => c.productId === productId);

    const targetItem = cart.items.find(
      c => c.productId === productId && c.color === color
    );
    if (!targetItem) return;

    let updatedItems;
    if (targetItem.quantity === 1) {
      // updatedItems = cart.items.filter(
      //   item => !(item.productId === productId && item.color === color)
      // );
      return;
    } else {
      updatedItems = cart.items.map(c => {
        if (c.productId === productId && c.color === color) {
          return { ...c, quantity: c.quantity - 1 };
        }
        return c;
      });
    }

    setCart({
      ...cart,
      items: updatedItems,
      totalQty: cart.totalQty - 1,
      totalPrice: cart.totalPrice - targetProduct.price,
      updatedAt: new Date().toISOString()
    });
  };


  const clearCart = () => {
    setCart({
      cartId: cart.cartId,
      userId: cart.userId,
      items: [],
      totalQty: 0,
      totalPrice: 0,
      updatedAt: new Date().toISOString()
    });
  };

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      addToCart,
      removeFromCart,
      incrementItem,
      decrementItem,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}