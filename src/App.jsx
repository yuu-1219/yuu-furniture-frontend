import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Complete from "./pages/Complete";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserPage from "./pages/UserPage";
import OrderHistory from "./pages/OrderHistory";
import UserInfo from "./pages/UserInfo";
import Favorite from "./pages/Favorite";
import UserPassword from './pages/UserPassword';

import Header from "./components/Header";
import Footer from "./components/Footer"; 


function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/user/:id/order-history" element={<OrderHistory />} />
        <Route path="/user/:id/info" element={<UserInfo />} />
        <Route path="/user/:id/password" element={<UserPassword />} />
        <Route path="/user/:id/favorite" element={<Favorite />} />
      </Routes>
  
    </BrowserRouter>
  );

}

export default App
