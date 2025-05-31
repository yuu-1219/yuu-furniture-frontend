import '../styles/Home.css'
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { categories } from '../constants/categories';

import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryCard from '../components/CategoryCard';

import furniture1 from '../assets/imgs/furniture1.jpg';

export default function Home() {
  // const { categoryId, categoryLabel } = categories;
  return (
    <>
      <Header />
      {/* (start)背景画像表示領域 */}
      {/* <div class="container-fluid contents"> */}
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
          {/* <div class="row justify-content-center"> */}

          {/* (start)タイトル~メインパーツ表示レイアウト */}
          <Box
            sx={{
              width: "90%",
              padding: "20px 0px",
              margin: "20px 20px",
              // maxWidth: "800px",
              // backgroundColor: "rgba(251, 245, 230, 0.8)",
              // borderRadius: "10px",
              // border: "0.2px solid #eee9d3",
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
                order: {
                  xs: 2,
                  md: 1
                },
              }}
            >
              <CategoryCard />

            </Box>


            {/* <nav class="nav-ver side-ver col-3 px-2 py-3 my-4">
              <ul class="nav side-ver-items">
                <li class="nav-item">
                  <p class="category-title">カテゴリーから選ぶ</p>
                </li>



                <li class="nav-item">
                  <Link to="/products" className="nav-link category-link">
                    全ての商品
                    <KeyboardArrowRightIcon />
                  </Link>
                </li>

                {categories.map((category) => (
                  <li class="nav-item">
                    <Link to={`/products?category=${category.categoryId}`} className="nav-link category-link">
                      {category.categoryLabel}
                      <KeyboardArrowRightIcon />
                    </Link>
                  </li>
                ))}


              </ul>
            </nav> */}



            {/* タイトル文 */}
            <Box
              sx={{
                // width: "75%",
                width: {
                  xs: "90%",
                  md: "75%",
                },
                order: {
                  xs: 1,
                  md: 2
                },
                margin: {
                  xs: "0px 0px 20px 0px",
                  sm: "0px 0px 30px 0px",
                  md: "5px 5px 5px 40px",
              },
              }}
            >
              {/* <div class="title-card col-8 py-3 my-4"> */}
              {/* <div class="row justify-content-center">
                <div class="col-1"></div>
                <div class="col-10"> */}
              {/* <h1 class="title">ミニマルな美学を、あなたの部屋に</h1> */}


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

              <img src={furniture1} alt="title_img" style={{ width: "100%",  }} />


              {/* </div>
                <div class="col-1"></div>
              </div> */}
              {/* </div> */}

            </Box>

          </Box>
          {/* </div> */}
        </Box>
        {/* (start)タイトル~メインパーツ表示領域 */}

      </Box>
      {/* (start)背景画像表示領域 */}
      {/* </div > */}

      <Footer />
    </>
  )
}