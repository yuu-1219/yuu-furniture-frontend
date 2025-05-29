import axios from "axios";

import { createContext, useState, useContext } from "react";

// import { products } from "../constants/products";

import { useUser } from "./UserContext";

const CartUrl = `${import.meta.env.VITE_API_BASE_URL}/cart`;

// Context を作成
const CartContext = createContext();

// Provider を定義
export function CartProvider({ children }) {
  const [cart, setCart] = useState({
    // cartId: null,
    userId: null,
    items: [],
    totalQty: 0,
    totalPrice: 0,
    updatedAt: null
  });

  const registerCart = async (cartData) => {
    const res = await axios.post(CartUrl, cartData);
    return res.data;
  };

  const resetCart = () => {
    setCart({
      userId: null,
      items: [],
      totalQty: 0,
      totalPrice: 0,
      updatedAt: null,
    });
  };

  const getCart = async (userId) => {
    const res = await axios.get(`${CartUrl}/${userId}`);
    setCart(res.data);
    return res.data;
  };


  const addToCart = async (productId, color, qty, price) => {
    // const { user } = useUser();
    // const product = products.find(c => c._id === productId);

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

    const updatedCart = {
      ...cart,
      // userId: userId,
      items: updatedItems,
      totalQty: cart.totalQty + qty,
      totalPrice: cart.totalPrice + qty * price,
      updatedAt: new Date().toISOString()
    };

    setCart(updatedCart);

    // if (!user) return null;
    if (!updatedCart.userId) return null;

    const res = await axios.put(`${CartUrl}/${updatedCart.userId}`, updatedCart );
    setCart(res.data);
    return res.data;
  };


  const removeFromCart = async (productId, color, price) => {
    // const { user } = useUser();
    // const targetProduct = products.find(c => c.productId === productId);

    const targetItem = cart.items.find(
      c => c.productId === productId && c.color === color
    );
    // if (!targetItem) return;

    const updatedItems = cart.items.filter(
      c => !(c.productId === productId && c.color === color)
    );

    const updatedCart = {
      ...cart,
      // userId: userId,
      items: updatedItems,
      totalQty: cart.totalQty - targetItem.quantity,
      totalPrice: cart.totalPrice - price * targetItem.quantity,
      updatedAt: new Date().toISOString()
    };

    setCart(updatedCart);

    // if (!user) return null;
    // if (!userId) return null;
    if (!updatedCart.userId) return null;

    const res = await axios.put(`${CartUrl}/${updatedCart.userId}`, updatedCart );
    setCart(res.data);
    return res.data;
  };

  const incrementItem = async (productId, color, price) => {
    // const { user } = useUser();
    // const targetProduct = products.find(c => c.productId === productId);

    const updatedItems = cart.items.map(c => {
      if (c.productId === productId && c.color === color) {
        return { ...c, quantity: c.quantity + 1 };
      }
      return c;
    });

    const targetItem = cart.items.find(c => c.productId === productId && c.color === color);
    // if (!item) return;

    const updatedCart = {
      ...cart,
      // userId: userId,
      items: updatedItems,
      totalQty: cart.totalQty + 1,
      totalPrice: cart.totalPrice + price,
      updatedAt: new Date().toISOString()
    };

    setCart(updatedCart);

    // if (!user) return null;
    // if (!userId) return null;
    if (!updatedCart.userId) return null;

    const res = await axios.put(`${CartUrl}/${updatedCart.userId}`, updatedCart );
    setCart(res.data);
    return res.data;
  };

  const decrementItem = async (productId, color, price) => {
    // const { user } = useUser();
    // const targetProduct = products.find(c => c.productId === productId);

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

    const updatedCart = {
      ...cart,
      // userId: userId,
      items: updatedItems,
      totalQty: cart.totalQty - 1,
      totalPrice: cart.totalPrice - price,
      updatedAt: new Date().toISOString()
    };

    setCart(updatedCart);

    // if (!user) return null;
    // if (!userId) return null;
    if (!updatedCart.userId) return null;


    const res = await axios.put(`${CartUrl}/${updatedCart.userId}`, updatedCart );
    setCart(res.data);
    return res.data;
  };


  const clearCart = async (userId) => {
    const clearedCart = {
      // cartId: cart.cartId,
      userId: userId,
      items: [],
      totalQty: 0,
      totalPrice: 0,
      updatedAt: new Date().toISOString()
    };

    setCart(clearedCart);

    const res = await axios.put(`${CartUrl}/${userId}`,  clearedCart );
    setCart(res.data);
    return res.data;

  };

  const deleteCart = async (userId) => {
    setCart({
      userId: null,
      items: [],
      totalQty: 0,
      totalPrice: 0,
      updatedAt: new Date().toISOString()
    });
    const res = await axios.delete(`${CartUrl}/${userId}`);
    return res.data;
  }

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      registerCart,
      resetCart,
      getCart,
      addToCart,
      removeFromCart,
      incrementItem,
      decrementItem,
      clearCart,
      deleteCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}