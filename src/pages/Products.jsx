import '../styles/Products.css'

import axios from "axios";

import * as React from 'react';
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { colors } from '../constants/colors';
import { priceRanges } from "../constants/priceRanges";
import { categories } from "../constants/categories";
import { onFilters } from "../constants/onFilters";
// import { products } from "../constants/products";

import Header from "../components/Header";
import Footer from "../components/Footer";

import ProductCard from "../components/ProcuctCard";
import ColorCard from "../components/ColorCard";
import PriceCard from "../components/PriceCard";
import SearchResultBar from "../components/SearchResultBar";
import PaginationButton from "../components/PagingButton";
import BackButton from "../components/BackButton";
import ConditionCard from '../components/ConditionCard';

const ProductsUrl = `${import.meta.env.VITE_API_BASE_URL}/products`;


export default function Products() {
  // const fetchProductsUrl = "http://localhost:3000/products";

  const [products, setProducts] = useState([]);
  const [onColors, setOnColors] = useState(colors);
  const [onPriceRanges, setOnPriceRanges] = useState(priceRanges);
  const [onFilter, setOnFilter] = useState(onFilters[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams] = useSearchParams();
  const onCategoryId = searchParams.get("category");
  const onCategory = categories.find(c => c.categoryId === onCategoryId);
  const queryString = onCategory ? `?category=${onCategoryId}` : "";

  useEffect(() => {
    fetchProducts();
  }, [onCategoryId]);

  async function fetchProducts() {
    try {
      const productsResult = await axios.get(`${ProductsUrl}${queryString}`);
      setProducts(productsResult.data);
    } catch (e) {
      const message = e.response?.data?.message || "商品データの取得中にエラーが発生しました";
      alert(message);
    }

  }

  const perPage = 8;
  const totalPages = Math.ceil(products.length / perPage);
  const showProducts = products.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  )

  const handlePageChange = (e, value) => {
    setCurrentPage(value);
  };


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
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "column",
              },
              justifyContent: "center",
              alignItems: {
                xs: "center",
                md: "flex-start",
              }
            }}
          >

            {/* (start)タイトル文 */}
            <Box
              sx={{
                width: {
                  xs: "95%",
                  md: "75%",
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
                  fontSize: {
                    xs: "22px",
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
                {onCategory ? onCategory.categoryLabel : "すべての商品"}
              </Typography>


              <Typography
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                    md: "17px",
                    lg: "20px",
                  },
                  fontWeight: "500",
                  padding: {
                    xs: "10px 0px",
                    sm: "10px 0px",
                    md: "10px 5px",
                  },
                  textAlign: "left"
                }}>
                {onCategory ? onCategory.description : "すべての商品"}

              </Typography>
            </Box>
            {/* (end)タイトル文 */}






            {/* (start)条件カード、商品一覧 */}
            <Box
              sx={{
                width: "100%",
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
                },
              }}
            >

              {/* (start)条件カード */}
              <Box
                sx={{
                  width: {
                    xs: "95%",
                    md: "24%",
                  },

                }}
              >

                <ConditionCard />
              </Box>
              {/* (end)条件カード */}


              {/* (start)サーチバー、商品一覧 */}
              <Box
                sx={{
                  width: {
                    xs: "95%",
                    md: "76%",
                  },
                  margin: {
                    xs: "10px 5px",
                    sm: "10px 5px",
                    md: "0px 0px 0px 20px",
                  },

                }}
              >
                <SearchResultBar products={products} currentPage={currentPage} perPage={perPage} onFilter={onFilter} setOnFilter={setOnFilter} />

                {/* (start)商品一覧 */}
                <Box
                  sx={{
                    width: "100%",
                    margin: "30px 5px 0px 5px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    justifyContent: "flex-start",
                    alignItems: "center"
                  }}
                >

                  {/* <Box> */}

                  {showProducts.map((product) => (
                    <ProductCard
                      product={product}
                    // products={products}
                    />
                  ))}

                  {/* </Box> */}
                </Box>
                {/* (end)商品一覧 */}

              </Box> {/* (start)サーチバー、商品一覧 */}



            </Box>
            {/* (end)条件カード、商品一覧 */}

          </Box>
          {/* (end)タイトル~メインパーツ表示レイアウト */}

        </Box>
        {/* (end)タイトル~メインパーツ表示領域 */}

        {/* (start)ページネーション */}
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
            <PaginationButton totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />

          </Box>


          <Box
            sx={{
              margin: "30px 0px 0px 0px",
            }}
          >
            <BackButton text="ホームに戻る" link="/" />
          </Box>


        </Box>
        {/* (end)ページネーション */}
      </Box>
      {/* (start)タイトル~メインパーツ表示領域 */}


      < Footer />
    </>
  );

}

