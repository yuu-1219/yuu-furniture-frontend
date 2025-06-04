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
              margin: "20px 20px",
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
                order: {
                  xs: 2,
                  md: 1
                },
              }}
            >
              <CategoryCard />

            </Box>


            {/* タイトル文 */}
            <Box
              sx={{
                // width: "75%",
                width: {
                  xs: "100%",
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

            </Box>

          </Box>
        </Box>
        {/* (start)タイトル~メインパーツ表示領域 */}

      </Box>
      {/* (start)背景画像表示領域 */}

      <Footer />
    </>
  )
}