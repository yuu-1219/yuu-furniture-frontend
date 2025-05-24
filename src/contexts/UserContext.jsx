import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

//   const addOrder = (newOrder) => {
//     setUser((prevUser) => ({
//       ...prevUser,
//       orders: [...(prevUser.orders || []), newOrder],
//     }));
//   };

  const handlePurchase = (cart) => {
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

    setUser(prevUser => ({
      ...prevUser,
      orders: [...(prevUser.orders || []), newOrder],
    }));

    return newOrder;
  };

  const generateOrderId = () => {
    const now = new Date();
    const yyyymmdd = now.toISOString().slice(0, 10).replace(/-/g, "");
    const hhmm = now.getHours().toString().padStart(2, "0") + now.getMinutes().toString().padStart(2, "0");
    return `${yyyymmdd}-${hhmm}`;
  };

  const addFavorite = (productId, color) => {
    setUser((prevUser) => ({
      ...prevUser,
      favorites: [...(prevUser.favorites || []), { productId, color }],
    }));
  };
  
  const removeFavorite = (productId, color) => {
    setUser((prevUser) => ({
      ...prevUser,
      favorites: prevUser.favorites.filter(c => !(c.productId === productId && c.color === color))
    }));
  };

  const toggleFavorite = (productId, color) => {
    setUser((prevUser) => {
      const favorites = prevUser.favorites || [];
      const isAlready = favorites.some(c => c.productId === productId && c.color === color);
      return {
        ...prevUser,
        favorites: isAlready
          ? favorites.filter(c => !(c.productId === productId && c.color === color))
          : [...(favorites || []), { productId , color}]
      };
    });
  };
 

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        user,
        setUser,
        login,
        logout,
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