import { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from "../components/Header";
import Footer from "../components/Footer";

import PaginationButton from "../components/PagingButton";
import BackButton from "../components/BackButton";
import Price from '../components/Price';
import FavoriteItem from "../components/FavoriteItem";

import { products } from "../constants/products";

import { useUser } from "../contexts/UserContext";


export default function Favorite() {
  const { user, isAuthenticated } = useUser();
  const { favorites } = user;

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
              width: "90%",
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
              お気に入り商品
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
                  margin: "10px 0px 10px 0px",
                  width: { xs: "100%", md: "100%" },
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

                {/* {favorites.length === 0 ? (
                  <Typography>お気に入り商品はありません</Typography>
                ) : (
                   */}
                    {favorites.map((item) => (

                      <>

                        <Box
                          sx={{
                            backgroundColor: "rgba(251, 245, 230, 0.8)",
                            borderRadius: "6px",
                            border: "0.2px solid #eee9d3",
                            margin: "0px 0px 30px 0px",
                          }}
                        >

                          <FavoriteItem productId={item.productId} color={item.color} />

                        </Box>

                      </>
                    ))}
                  

                {/* )
             } */}

              </Box>
              {/* (end)左パーツ */}


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
            <BackButton text="マイページに戻る" link={`/user/${user.userId}`} />
          </Box>
        </Box>


      </Box>


      <Footer />
    </>
  )
}