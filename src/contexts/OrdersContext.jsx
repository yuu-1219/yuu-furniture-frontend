import { createContext, useState, useContext } from "react";

const OrdersContext = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  // 購入処理
  const handlePurchase = (userId, cart) => {
    const newOrder = {
      orderId: generateOrderId(),
      userId: userId,
      items: cart.items.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
        color: item.color
      })),
      totalQty: cart.totalQty,
      totalPrice: cart.totalPrice,
      purchasedAt: new Date().toISOString()
    };

    setOrders(prev => [...prev, newOrder]);

    return newOrder;
  };

  const generateOrderId = () => {
    const now = new Date();
    const yyyymmdd = now.toISOString().slice(0, 10).replace(/-/g, "");
    const hhmm = now.getHours().toString().padStart(2, "0") + now.getMinutes().toString().padStart(2, "0");
    return `${yyyymmdd}-${hhmm}`;
  };

  return (
    <OrdersContext.Provider value={{ orders, handlePurchase }}>
      {children}
    </OrdersContext.Provider>
  );

}

export function useOrders() {
    return useContext(OrdersContext);
}