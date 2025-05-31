import axios from "axios";

import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from "../components/Header";
import Footer from "../components/Footer";

import PaginationButton from "../components/PagingButton";
import BackButton from "../components/BackButton";
import Price from '../components/Price';
import Orders from "../components/Orders";

import { products } from "../constants/products";

import { useUser } from "../contexts/UserContext";

const UserUrl = `${import.meta.env.VITE_API_BASE_URL}/user`;
const ProductsUrl = `${import.meta.env.VITE_API_BASE_URL}/products`;



export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [orderProducts, setOrderProducts] = useState({});
  const { user, isAuthenticated } = useUser();

  useEffect(() => {
    fetchOrders();
    fetchProducts();
  }, [user]);

  useEffect(() => {
    fetchProducts();
  }, [orders]);

  async function fetchProducts() {
    const allProducts = {};

    for (const order of orders) {
      const productIds = [...new Set(order.items.map(item => item.productId))];
      const results = await Promise.all(
        productIds.map(id => axios.get(`${ProductsUrl}/${id}`))
      );

      const productsPerOrder = {};
      results.forEach(res => {
        productsPerOrder[res.data._id] = res.data;
      });

      allProducts[order.orderId] = productsPerOrder;
    }

    setOrderProducts(allProducts);
  }


  async function fetchOrders() {
    // const currentUser = axios.get(`${UserUrl}/${id}`);
    // setOrders(currentUser.orders);

    if (user && user.orders) {
      setOrders(user.orders);
    }
  }

  return (
    <>
      <Header />
      {/* (start)背景画像表示領域 */}
      <Box className="background-overlay">

        {/* (start)タイトル~メインパーツ表示領域 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "60px 0px 0px 0px",
            margin: "0px 0px 0px 0px",
          }}
        >

          {/* (start)タイトル~メインパーツ表示レイアウト */}
          <Box
            sx={{
              width: "90%",
              padding: "30px 30px",
              margin: "30px 30px",
              // maxWidth: "800px",
              // backgroundColor: "rgba(251, 245, 230, 0.8)",
              // borderRadius: "10px",
              // border: "0.2px solid #eee9d3",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >

            {/* <h1 class="title">
              注文履歴
            </h1> */}

            <Typography
              sx={{
                // fontSize: "50px",
                fontSize: {
                  xs: "28px",  
                  sm: "36px",  
                  md: "48px",  
                  lg: "50px",  
                },
                fontWeight: "600",
                // padding: "0px 50px",
                padding: {
                  xs: "0px 10px",
                  sm: "0px 15px",
                  md: "0px 20px",
                },
              }}>
              注文履歴
            </Typography>



              {/* (start)注文履歴一覧 */}
              <Box
                sx={{
                  margin: "10px 0px 10px 0px",
                  width: { xs: "100%", md: "100%" },
                  // minWidth: "300px",
                  // backgroundColor: "rgba(251, 245, 230, 0.8)",
                  // borderRadius: "10px",
                  // border: "0.2px solid #eee9d3",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >

                {orders.map((item) => {

                  return (
                    <>

                      <Box
                        sx={{
                          width: "100%",
                          backgroundColor: "rgba(251, 245, 230, 0.8)",
                          borderRadius: "6px",
                          border: "0.2px solid #eee9d3",
                          margin: "0px 0px 30px 0px",
                        }}
                      >

                        <Orders orderId={item.orderId} products={orderProducts[item.orderId] || {}} />
                      </Box>

                    </>
                  )
                })}

              </Box>
              {/* (end)注文履歴一覧 */}


          </Box>
          {/* (end)タイトル~メインパーツ表示レイアウト */}


        </Box>
        {/* (end)タイトル~メインパーツ表示領域 */}



        <Box
          sx={{
            margin: "0px 0px 150px 0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // height: "100vh"   
          }}
        >


          <Box
            sx={{
              margin: "0px 0px 0px 0px",
            }}
          >
            <BackButton text="マイページに戻る" link={`/user/${user._id}`} />
          </Box>
        </Box>


      </Box>
      {/* (end)背景画像表示領域 */}


      <Footer />
    </>
  )
}