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
    const productsResult = await axios.get(`${ProductsUrl}${queryString}`);
    // console.log(productsResult);
    setProducts(productsResult.data);
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

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };


  return (
    <>
      <Header />
      <div class="background-overlay">
        <div class="container-fluid contents">
          <div class="row justify-content-center">
            <nav class="nav-ver side-ver col-3 px-2 py-3 my-4">
              <ul class="nav side-ver-items">
                <li class="nav-item condition-title">
                  <p class="condition-title">条件で絞り込む</p>
                </li>
                <li class="nav-item condition">
                  <Accordion
                    defaultExpanded
                    sx={{
                      backgroundColor: "#fbf5e6",
                      borderRadius: "6px",
                      maxWidth: "240px"
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <div class="condition-name">
                        カラー
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box className="condition-item">
                        {
                          colors.map((color) => (
                            <ColorCard color={color} onColors={onColors} setOnColors={setOnColors} />
                          ))
                        }
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </li>
                <li class="nav-item condition">
                  <Accordion
                    defaultExpanded
                    sx={{
                      backgroundColor: "#fbf5e6",
                      borderRadius: "6px",
                      maxWidth: "240px"
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <div class="condition-name">
                        価格
                      </div>
                    </AccordionSummary>
                    <AccordionDetails >
                      <Box className="condition-item">
                        {
                          priceRanges.map((priceRange) => (
                            <PriceCard priceRange={priceRange} onPriceRanges={onPriceRanges} setOnPriceRanges={setOnPriceRanges} />
                          ))
                        }
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </li>

              </ul>
            </nav>

            {/* <div class="col-1">

          </div> */}

            <div class="title-card col-9 py-3 my-4">
              <div class="row justify-content-center">
                <div class="col-11">
                  <h1 class="title">
                    {onCategory ? onCategory.categoryLabel : "すべての商品"}
                  </h1>
                  <p class="discription my-3">
                    {onCategory ? onCategory.description : "すべての商品"}
                  </p>
                  <SearchResultBar products={products} currentPage={currentPage} perPage={perPage} onFilter={onFilter} setOnFilter={setOnFilter} />

                  <Box
                    sx={{
                      margin: "30px 5px 0px 5px",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 2,
                      justifyContent: "flex-start",
                      alignItems: "center"
                    }}
                  >
                    {
                      showProducts.map((product) => (
                        <ProductCard
                          product={product}
                          // products={products}
                        />
                      ))
                    }
                  </Box>


                </div>
              </div>
            </div>
          </div>
        </div>


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
            <BackButton text="ホームに戻る" link="/"/>
          </Box>


        </Box>
      </div >


      < Footer />
    </>
  );

}