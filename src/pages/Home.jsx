import '../styles/Home.css'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { categories } from '../constants/categories';

import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryCard from '../components/CategoryCard';

import furniture1 from '../assets/imgs/furniture1.jpg';

const ProductsUrl = `${import.meta.env.VITE_API_BASE_URL}/products`;

export default function Home() {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    fetchTopProducts();
  }, [topProducts]);

  async function fetchTopProducts() {
    try {
      const topProducts = await axios.post(`${ProductsUrl}/ranking`);
      setTopProducts(topProducts.data);
    } catch (e) {
      const message = e.response?.data?.message || "商品データの取得中にエラーが発生しました";
      alert(message);
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
              padding: "20px 0px",
              // margin: "20px 20px",
              margin: "20px 20px 150px 20px",
              // maxWidth: "800px",
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              justifyContent: "center",
              alignItems: {
                xs: "center",
                md: "flex-start",
              }
            }}
          >

            {/* カテゴリー一覧 */}
            <Box
              sx={{
                // width: "25%",
                width: {
                  xs: "100%",
                  md: "25%",
                },
                // height: {
                //   xs: "100%",
                //   md: "100%",
                // },
                order: {
                  xs: 2,
                  md: 1
                },
              }}
            >
              <CategoryCard />

            </Box>


            {/* (start)タイトル文、カルーセル */}
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "85%",
                  md: "70%",
                },
                // height: {
                //   xs: "100%",
                //   md: "100%",
                // },
                // margin: "0px 20px 0px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                order: {
                  xs: 1,
                  md: 2
                },
              }}
            >
              {/* (start)タイトル文 */}
              <Box
                sx={{
                  // width: "75%",
                  width: "100%",
                  // height: "40%",
                  // order: {
                  //   xs: 1,
                  //   md: 2
                  // },
                  margin: {
                    xs: "0px 0px 20px 0px",
                    sm: "0px 0px 30px 0px",
                    md: "5px 5px 5px 50px",
                  },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start"
                }}
              >

                <Typography
                  sx={{
                    // fontSize: "50px",
                    fontSize: {
                      xs: "18px",
                      sm: "26px",
                      md: "30px",
                      lg: "40px",
                    },
                    fontWeight: "600",
                    // padding: {
                    //   xs: "0px 10px",
                    //   sm: "0px 15px",
                    //   md: "0px 20px",
                    // },
                    textAlign: "left"
                  }}>
                  ミニマルな美学を、あなたの部屋に
                </Typography>

                <Typography
                  sx={{
                    // fontSize: "50px",
                    fontSize: {
                      xs: "12px",
                      sm: "15px",
                      md: "17px",
                      lg: "20px",
                    },
                    fontWeight: "500",
                    padding: {
                      xs: "10px 5px",
                      sm: "10px 5px",
                      md: "10px 5px",
                    },
                    textAlign: "left"
                  }}>
                  機能美と洗練されたデザインが融合した家具コレクション。
                  <Box component="br"></Box>
                  忙しい日常に、静かな美しさを取り入れませんか？
                </Typography>

                {/* <img
                  src={furniture1}
                  alt="title_img"
                  style={{
                    width: "100%",
                    maxWidth: "700px"
                  }}
                /> */}

                {/* (start)カルーセル */}
                <Box sx={{
                  width: "100%",
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                  },
                  // height: "40%",
                  // height: "300px",
                  maxWidth: "700px",
                  margin: {
                    xs: "15px 0px 20px 0px",
                    sm: "15px 0px 30px 0px",
                    md: "15px 45px 5px 0px",
                  },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                }}
                >
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    style={{
                      '--swiper-navigation-color': '#fff',
                      '--swiper-pagination-color': '#fff',
                      aspectRatio: "8 / 5",
                      borderRadius: "6px",
                      border: "0.1px solid #eee9d3",
                      objectFit: 'cover',

                    }}
                  >
                    {topProducts.map((product, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <Box
                            component={Link}
                            to={`/products/${product._id}`}
                            state={{ product }}
                            sx={{
                              // display: "block",
                              width: "100%",
                              height: "100%",
                              textDecoration: "none",
                              color: "inherit"
                            }}
                          >
                            <img
                            src={product.img}
                            alt={product.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              // width: 400,
                              // height: 300,
                              // maxWidth: "500px",
                              objectFit: 'cover',
                            }}
                          />

                            <Box
                              sx={{
                                position: "absolute",
                                bottom: 0,
                                width: "100%",
                                backgroundColor: "rgba(192, 188, 156, 0.9)",
                                color: "rgba(240, 239, 238  )",
                                padding: "8px 0px 8px 16px",
                                textAlign: "left",
                                fontSize: {
                                  xs: "12px",
                                  sm: "16px",
                                  md: "18px"
                                },
                                fontWeight: "600",
                              }}
                            >
                              {product.name}
                            </Box>
                          </Box>
                        </SwiperSlide>
                      )
                    })}

                  </Swiper>
                </Box>
                {/* (end)カルーセル */}


              </Box>
              {/* (end)タイトル文 */}


              {/* (start)ランキングカルーセル */}
              {/* <Box sx={{
                width: "100%",
                // height: "40%",
                // height: "300px",
                maxWidth: "650px",
                margin: {
                  xs: "0px 0px 20px 0px",
                  sm: "0px 0px 30px 0px",
                  md: "80px 5px 5px 80px",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

              }}
              >
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                  style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    aspectRatio: "8 / 5",
                    borderRadius: "6px",
                    border: "0.1px solid #eee9d3",
                    objectFit: 'cover',

                  }}
                >
                  {topProducts.map((product, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <Box
                          component={Link}
                          to={`/products/${product._id}`}
                          state={{ product }}
                          sx={{
                            // display: "block",
                            width: "100%",
                            height: "100%",
                            textDecoration: "none",
                            color: "inherit"
                          }}
                        >
                          <img
                            src={product.img}
                            alt={product.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              // width: 400,
                              // height: 300,
                              // maxWidth: "500px",
                              objectFit: 'cover',
                            }}
                          />

                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 0,
                              width: "100%",
                              backgroundColor: "rgba(153, 147, 113     , 0.9)",
                              color: "rgba(242, 242, 242 )",
                              padding: "8px 0px 8px 16px",
                              textAlign: "left",
                              fontSize: {
                                xs: "14px",
                                sm: "16px",
                                md: "18px"
                              },
                              fontWeight: "600",
                            }}
                          >
                            {product.name}
                          </Box>
                        </Box>
                      </SwiperSlide>
                    )
                  })}

                </Swiper>
              </Box> */}
              {/* (end)ランキングカルーセル */}

            </Box>
            {/* (end)タイトル文、ランキング */}


          </Box>
        </Box>
        {/* (start)タイトル~メインパーツ表示領域 */}

      </Box >
      {/* (start)背景画像表示領域 */}

      < Footer />
    </>
  )
}