import { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Header from "../components/Header";
import Footer from "../components/Footer";

import BackButton from "../components/BackButton";

import { useUser } from "../contexts/UserContext";


export default function UserPage() {
  const { user, isAuthenticated } = useUser();

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
              マイページ
            </h1>

            <Box
              sx={{
                width:"100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >


              {/* (start)ボタン一覧 */}
              <Box
                sx={{
                  margin: "30px 0px 10px 0px",
                  width: { xs: "100%", md: "100%" },
                  minWidth: "300px",
                  // backgroundColor: "rgba(251, 245, 230, 0.8)",
                  // borderRadius: "10px",
                  // border: "0.2px solid #eee9d3",
                  display: "flex",
                  flexWrap: "wrap",
                  // flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-around",
                }}
              >

                {/* (start)注文履歴 */}
                <Box
                  component={Link}
                  to={`/user/${user.userId}/order-history`}
                  sx={{
                    width: "25%",
                    height: "100%",
                    padding: "20px 0px",
                    backgroundColor: "rgba(251, 245, 230, 0.8)",
                    borderRadius: "10px",
                    border: "0.2px solid #eee9d3",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      
                    }}
                  >
                    <HistoryIcon fontSize="large" />

                    <Typography
                      sx={{
                        padding: "50px 0px 0px 0px",
                        fontSize: "18px",
                        fontWeight: "500",
                        

                      }}
                    >
                      注文履歴
                    </Typography>

                  </Box>
                </Box>
                {/* (end)注文履歴 */}


                {/* (start)会員情報変更 */}
                <Box
                  component={Link}
                  to={`/user/${user.userId}/info`}
                  sx={{
                    width: "25%",
                    height: "100%",
                    padding: "20px 0px",
                    backgroundColor: "rgba(251, 245, 230, 0.8)",
                    borderRadius: "10px",
                    border: "0.2px solid #eee9d3",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <AccountCircleIcon fontSize="large" />

                    <Typography
                      sx={{
                        padding: "50px 0px 0px 0px",
                        fontSize: "18px",
                        fontWeight: "500",

                      }}
                    >
                      お客様情報の確認・変更
                    </Typography>

                  </Box>
                </Box>
                {/* (end)会員情報変更 */}


                {/* (start)お気に入り商品 */}
                <Box
                  component={Link}
                  to={`/user/${user.userId}/favorite`}
                  sx={{
                    width: "25%",
                    height: "100%",
                    padding: "20px 0px",
                    backgroundColor: "rgba(251, 245, 230, 0.8)",
                    borderRadius: "10px",
                    border: "0.2px solid #eee9d3",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <FavoriteBorderIcon fontSize="large" />

                    <Typography
                      sx={{
                        padding: "0px 0px 0px 0px",
                        margin: "50px 0px 0px 0px",
                        fontSize: "18px",
                        fontWeight: "500",

                      }}
                    >
                      お気に入り商品
                    </Typography>

                  </Box>
                </Box>
                {/* (end)お気に入り商品 */}



              </Box>
              {/* (end)ボタン一覧 */}


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