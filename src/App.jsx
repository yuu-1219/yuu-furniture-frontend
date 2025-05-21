import './styles/App.css'

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

import Review from "./components/Review";
import NameForm from "./components/NameForm";
import EmailForm from "./components/EmailForm";
import PasswordForm from './components/PasswordForm';
import Header from "./components/Header";
import Footer from "./components/Footer";
import PaginationRounded from "./components/PagingButton";
import BackButton from "./components/BackButton";
import FavoriteButton from './components/FavoriteButton';
import Price from './components/Price';
import ProductName from './components/ProductName';
import QtyButton from './components/QtyButton';
import TrashButton from './components/TrashButton';
import RunButton from './components/RunButton';

function App() {
  const user = {
    name: "Yuu"
  };

  const cartItem = {
    totalQty: 2
  };

  const pages = 9;
  const text = "戻る"
  const link = "/products" 
  const price = 24000;
  const productName = "オフィスチェア";
  const fontSize = "25px";
  const runText= "購入する";
  const productId = "0004";

  const viewResult = () => {
    alert("HI");
  } 

  return (
    <BrowserRouter>

      <Header />

      <nav>
        <Link to="/">ホーム</Link> | <Link to="/products">プロダクト</Link>
      </nav>

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
        <Route path="/user/:id/favorite" element={<Favorite />} />
      </Routes>

      <Review value={3} />
      <NameForm />
      <EmailForm />
      <PasswordForm />
      <FavoriteButton productId="p005"/>
      <ProductName productName={productName} fontSize={fontSize}/>
      <Price price={price} />
      <QtyButton/>
      <TrashButton productId={productId} removeProduct={viewResult}/>
      <RunButton text={runText} hundleClick={viewResult}/>

      <PaginationRounded pages={pages}/>

      <BackButton text={text} link={link} />
      {/* <BackButton /> */}

      

      <Footer />
  
    </BrowserRouter>
  );

}

export default App
