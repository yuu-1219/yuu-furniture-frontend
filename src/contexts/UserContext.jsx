import axios from "axios";

import { createContext, useState, useContext } from "react";

const UserUrl = `${import.meta.env.VITE_API_BASE_URL}/user`;

// import { useCart } from '../contexts/CartContext';

const UserContext = createContext();

// const { cart } = useCart();

export function UserProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const register = async (userInfo, password) => {
    const res = await axios.post(UserUrl, { userInfo, password });
    const { email } = res.data;
    await login(email, password);
    return res.data;
  };

  const login = async (email, password) => {
    const res = await axios.post(`${UserUrl}/login`, { email, password });
    setUser(res.data);
    setIsAuthenticated(true);
    return res.data
  };

  const logout = () => {
    setUser({
      name: null,
      email: null,
      // password: null,
      orders: [],
      favorites: []
    });
    setIsAuthenticated(false);
  };

  const changeUserInfo = async (userId, name, email) => {
    const updatedUser = {
      ...user,
      name: name,
      email: email,
    };

    setUser(updatedUser);

    // if (!user) return null;
    if (!userId) return null;

    const res = await axios.put(`${UserUrl}/${userId}`, updatedUser);
    setUser(res.data);
    return res.data;
  };


  const changeUserPassword = async (userId, newPassword) => {
    if (!userId) return null;

    const res = await axios.put(`${UserUrl}/${userId}/password`, { password: newPassword });
    setUser(res.data);
    return res.data;
  };


  const deleteUserInfo = async () => {
    setUser({
      // _id: null,
      name: null,
      email: null,
      password: null,
      orders: [],
      favorites: []
    });
    setIsAuthenticated(false);
    const res = await axios.delete(`${UserUrl}/${user._id}`);
    return res.data;
  }


  const handlePurchase = async (cart) => {
    if (!user) return null;

    const newOrder = {
      orderId: generateOrderId(),
      items: cart.items.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
        color: item.color,
      })),
      totalQty: cart.totalQty,
      totalPrice: cart.totalPrice,
      purchasedAt: new Date().toISOString(),
    };

    // setUser(prevUser => ({
    //   ...prevUser,
    //   orders: [...(prevUser.orders || []), newOrder],
    // }));

    const updatedUser = {
      ...user,
      orders: [newOrder, ...(user.orders || [])],
    };

    setUser(updatedUser);

    const res = await axios.put(`${UserUrl}/${user._id}`, updatedUser)
    setUser(res.data);
    return { orderId: newOrder.orderId, purchasedAt: newOrder.purchasedAt };
  };

  const generateOrderId = () => {
    const now = new Date();
    const yyyymmdd = now.toISOString().slice(0, 10).replace(/-/g, "");
    const hhmm = now.getHours().toString().padStart(2, "0") + now.getMinutes().toString().padStart(2, "0");
    return `${yyyymmdd}-${hhmm}`;
  };



  const addFavorite = async (userId, productId, color) => {
    const updatedUser = {
      ...user,
      favorites: [...(user.favorites || []), { productId, color }],
    };

    setUser(updatedUser);

    // if (!user) return null;
    if (!userId) return null;

    const res = await axios.put(`${UserUrl}/${userId}`, updatedUser);
    setUser(res.data);
    return res.data;
  };


  const removeFavorite = async (userId, productId, color) => {
    const updatedUser = {
      ...user,
      favorites: user.favorites.filter(c => !(c.productId === productId && c.color === color))
    };

    setUser(updatedUser);

    // if (!user) return null;
    if (!userId) return null;

    const res = await axios.put(`${UserUrl}/${userId}`, updatedUser);
    setUser(res.data);
    return res.data;
  };


  const toggleFavorite = async (userId, productId, color) => {
    // setUser((prevUser) => {
    //   const favorites = prevUser.favorites || [];
    //   const isAlready = favorites.some(c => c.productId === productId && c.color === color);
    //   return {
    //     ...prevUser,
    //     favorites: isAlready
    //       ? favorites.filter(c => !(c.productId === productId && c.color === color))
    //       : [...(favorites || []), { productId, color }]
    //   };
    // });

    const favorites = user.favorites || [];
    const isAlready = favorites.some(c => c.productId === productId && c.color === color);
    const updatedUser = {
        ...user,
        favorites: isAlready
          ? favorites.filter(c => !(c.productId === productId && c.color === color))
          : [...(favorites || []), { productId, color }]
    };

    setUser(updatedUser);

    // if (!user) return null;
    if (!userId) return null;

    const res = await axios.put(`${UserUrl}/${userId}`, updatedUser);
    setUser(res.data);
    return res.data;

  };


  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        user,
        setUser,
        register,
        login,
        logout,
        changeUserInfo,
        changeUserPassword,
        deleteUserInfo,
        handlePurchase,
        addFavorite,
        removeFavorite,
        toggleFavorite
      }}
    >
      {children}
    </UserContext.Provider>
  );

  //   return (
  //     <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
  //       {children}
  //     </AuthContext.Provider>
  //   );

}

export function useUser() {
  return useContext(UserContext);
}