import { useState } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Header from "../components/Header";
import Footer from "../components/Footer";

import PaginationButton from "../components/PagingButton";
import BackButton from "../components/BackButton";
import Price from '../components/Price';
import RunButton from '../components/RunButton';
import QtyButton from '../components/QtyButton';
import CartItem from "../components/CartItem";

import Products from './Products';

import { products } from "../constants/products";

import { useCart } from '../contexts/CartContext';
// import { useAuth } from '../contexts/AuthContext';
import { useUser } from "../contexts/UserContext";
// import { useOrders } from "../contexts/OrdersContext";


export default function Cart() {
  // const { user, isAuthenticated } = useAuth();
  const { user, isAuthenticated, handlePurchase } = useUser();
  const { cart, removeFromCart, incrementItem, declementItem, clearCart } = useCart();
  const { items, totalQty, totalPrice } = cart;
  // const { orders, handlePurchase } = useOrders();

  const navigate = useNavigate();



  const onClickPurchase = () => {   
    const newOrders = handlePurchase(cart);

    clearCart();

    navigate("/complete", {
      state: {
        orderId: newOrders.orderId,
        purchasedAt: newOrders.purchasedAt, 
      }
    });

    alert("購入が完了しました");
  };

  return (
    <>
      <Header />
      <Box className="background-overlay">

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "60px 0px 0px 0px",
            margin: "0px 0px 0px 0px",
          }}
        >

          <Box
            sx={{
              padding: "30px 80px",
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

            <h1 class="title">
              カート
            </h1>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >


              {/* (start)左パーツ */}
              <Box
                sx={{
                  margin: "0px 0px",
                  width: { xs: "100%", md: "70%" },
                  minWidth: "300px",
                  // backgroundColor: "rgba(251, 245, 230, 0.8)",
                  // borderRadius: "10px",
                  // border: "0.2px solid #eee9d3",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >

                {items.map((item) => (

                  <>

                    <Box
                      sx={{
                        backgroundColor: "rgba(251, 245, 230, 0.8)",
                        borderRadius: "6px",
                        border: "0.2px solid #eee9d3",
                        margin: "0px 0px 20px 0px",
                      }}
                    >

                      <CartItem productId={item.productId} color={item.color}/>
                    </Box>

                  </>
                ))}

              </Box>
              {/* (end)左パーツ */}



              {/* (start)右パーツ */}
              <Box
                sx={{
                  width: { xs: "100%", md: "30%" },
                  maxHeight: "420px",
                  padding: "30px 0px 30px 0px",
                  margin: "0px 50px 0px 50px",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  backgroundColor: "rgba(251, 245, 230, 0.8)",
                  borderRadius: "10px",
                  border: "0.2px solid #eee9d3",

                }}
              >



                <Typography
                  sx={{
                    fontSize: "26px",
                    fontWeight: "600",
                    margin: "0px 0px 0px 0px",
                  }}
                >
                  ご注文内容
                </Typography>

                <br />

                {/* (start)商品代金 */}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    padding: "5px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "40%"

                    }}
                  >
                    商品
                  </Typography>

                  <Typography
                    sx={{
                      width: "60%"
                    }}
                  >
                    <Price price={totalPrice} priceSize={24} unitSize={16} priceWidth={58} />
                  </Typography>
                </Box>
                {/* (end)商品代金 */}


                {/* <br /> */}
                <Divider sx={{ width: '100%', my: 1 }} />


                {/* (start)送料 */}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    padding: "5px",
                  }}
                >
                  <Typography
                    sx={{

                      width: "40%"

                    }}
                  >
                    送料
                  </Typography>

                  <Typography
                    sx={{

                      width: "60%"
                    }}
                  >
                    <Price price={750} priceSize={24} unitSize={16} priceWidth={58} />
                  </Typography>
                </Box>
                {/* (end)商品代金 */}


                {/* <br /> */}
                <Divider sx={{ width: '100%', my: 1 }} />


                {/* (start)合計代金 */}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    padding: "5px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "40%"

                    }}
                  >
                    合計
                  </Typography>

                  <Typography
                    sx={{
                      width: "60%"
                    }}
                  >
                    <Price price={750 + totalPrice} priceSize={24} unitSize={16} priceWidth={58} />
                  </Typography>
                </Box>
                {/* (end)合計代金 */}



                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "40px 0px 0px 0px",
                    width: "60%"
                  }}
                >
                  <RunButton text={"購入する"} width={650} handleClick={onClickPurchase} />
                </Box>
              </Box>

              {/* (end)右パーツ */}


            </Box>

          </Box>




        </Box>



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
              margin: "0px 0px 60px 0px",
            }}
          >
            <BackButton text="ホームに戻る" link="/" />
          </Box>
        </Box>


      </Box>


      <Footer />
    </>
  )
}