import '../styles/Home.css'
import { Link } from "react-router-dom";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { categories } from '../constants/categories';

import Header from "../components/Header";
import Footer from "../components/Footer";

import furniture1 from '../assets/imgs/furniture1.jpg';

export default function Home() {
  // const { categoryId, categoryLabel } = categories;
  return (
    <>
      <Header />
      <div class="container-fluid contents">
        <div class="background-overlay">
          <div class="row justify-content-center">
            <nav class="nav-ver side-ver col-3 px-2 py-3 my-4">
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




                {/* <li class="nav-item">
                  <Link to="/products" className="nav-link">
                    全ての商品
                    <KeyboardArrowRightIcon />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/products?category=storage_firniture" className="nav-link">
                    収納家具
                    <KeyboardArrowRightIcon />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/products?category=small_storage" className="nav-link">
                    小物収納
                    <KeyboardArrowRightIcon />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/products?category=sofas&armchairs" className="nav-link">
                    ソファ&パーソナルチェア
                    <KeyboardArrowRightIcon />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/products?category=textiles" className="nav-link">
                    クッション&家具
                    <KeyboardArrowRightIcon />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/products?category=beds&mattresses" className="nav-link">
                    ベッド・マットレス
                    <KeyboardArrowRightIcon />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/products?category=tables&chairs" className="nav-link">
                    テーブル・チェア
                    <KeyboardArrowRightIcon />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/products?category=desk&deskchairs" className="nav-link">
                    デスク・チェア
                    <KeyboardArrowRightIcon />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/products?category=Lightning" className="nav-link">
                    照明
                    <KeyboardArrowRightIcon />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/products?category=rugs&mats" className="nav-link">
                    ラグ・カーペット
                    <KeyboardArrowRightIcon />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/products?category=decoration" className="nav-link">
                    インテリア雑貨
                    <KeyboardArrowRightIcon />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/products?category=kitchenware&tableware" className="nav-link">
                    調理器具・食器
                    <KeyboardArrowRightIcon />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/products?category=bathroom_products" className="nav-link">
                    洗面所収納・バスタオル
                    <KeyboardArrowRightIcon />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/products?category=kitchen&appliances" className="nav-link">
                    キッチン収納
                    <KeyboardArrowRightIcon />
                  </Link>
                </li> */}
              </ul>
            </nav>

            {/* <div class="col-1">

          </div> */}

            <div class="title-card col-8 py-3 my-4">
              <div class="row justify-content-center">
                <div class="col-1"></div>
                <div class="col-10">
                  <h1 class="title">ミニマルな美学を、あなたの部屋に</h1>
                  <p class="discription my-3">
                    機能美と洗練されたデザインが融合した家具コレクション。
                    <br />
                    忙しい日常に、静かな美しさを取り入れませんか？
                  </p>
                  <img src={furniture1} alt="title_img" style={{ width: "100%", maxWidth: "820px" }} />


                </div>
                <div class="col-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div >

      <Footer />
    </>
  )
}