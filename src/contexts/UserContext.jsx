// context/UserContext.jsx
import { createContext, useState, useContext } from "react";

// Context を作成
const UserContext = createContext();

// Provider を定義
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Context を簡単に使えるようにするカスタムフック
export function useUser() {
  return useContext(UserContext);
}