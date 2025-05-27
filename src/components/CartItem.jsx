import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Price from "./Price";
import QtyButton from './QtyButton';

// import { products } from "../constants/products";

import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";


export default function CartItem({ product, productId, color, qty }) {
    // const fetchProductsUrl = "http://localhost:3000/products";

    // const [product, setProduct] = useState([]);

    const { user } = useUser();
    const { cart, removeFromCart, incrementItem, decrementItem, clearCart } = useCart();

    // const product = products.find(c => c._id === productId);
    const { name, price, img } = product;

    // const cartItem = cart.items.find(c => c.productId === productId && c.color === color);
    // const qty = cartItem.quantity;


    // useEffect(() => {
    //     fetchProduct();
    // }, [productId]);

    // async function fetchProduct() {
    //     const productResult = await axios.get(`${fetchProductsUrl}/${productId}`);
    //     console.log(productResult);
    //     setProduct(productResult.data);
    // }


    const onIncrement = () => {
        incrementItem(user._id, productId, color, price);
    }
    const onDecrement = () => {
        decrementItem(user._id, productId, color, price);
    }

    const onDelete = () => {
        alert("商品を削除しました");
        removeFromCart(user._id, productId, color, price);
    }



    return (
        <Box
            sx={{

                width: "100%",
                minWidth: "300px",
                // maxWidth: "800px",
                minHeight: "200px",
                padding: "20px",
                margin: "0px 0px 20px 0px",
                // backgroundColor: "rgba(251, 245, 230, 0.8)",
                // borderRadius: "6px",
                // border: "0.2px solid #eee9d3",
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",

            }}>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                }}
            >

                {/* (start)商品説明 */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                    }}
                >


                    <img
                        src={img}
                        alt={name}
                        style={{
                            width: "40%",
                            // maxWidth: "250px",
                            height: "auto",
                            // maxHeight: "150px",
                            objectFit: "cover",
                            aspectRatio: "4 / 3"
                        }}
                    />

                    <Box
                        sx={{
                            width: "60%",
                            padding: "2px 0px 0px 25px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                        }}
                    >

                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: "600",
                            }}
                        >
                            {name}
                        </Typography>

                        <Typography
                            sx={{
                                padding: "15px 0px 0px 3px"

                            }}
                        >
                            {`商品コード : ${productId}`}
                        </Typography>

                        <Typography
                            sx={{
                                padding: "5px 0px 0px 3px"

                            }}
                        >
                            {`カラー : ${color}`}
                        </Typography>

                        <Box
                            sx={{
                                padding: "5px 0px 0px 0px"

                            }}
                        >

                            <Price price={price} priceWidth={43} priceSize={20} unitSize={14} />
                        </Box>


                    </Box>

                </Box>
                {/* (end)商品説明 */}


                {/* (start)小計 */}
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "20px 0px 0px 0px",
                        padding: "10px 50px 0px 30px",
                        display: 'flex',
                        alignItems: 'center',
                        // gap: 0.5
                    }}
                >

                    <Box
                        sx={{
                            width: "10%",
                            // display: "block"
                        }}
                    >
                        <QtyButton qty={qty} onIncrement={onIncrement} onDecrement={onDecrement} />

                    </Box>



                    <Box
                        sx={{
                            width: "40%",
                            // maxwidth: "20px",
                            display: "flex",
                            alignItems: "baseline",
                            justifyContent: "center"
                        }}
                    >
                        <Typography
                            sx={{
                                // width: "20%",
                                fontWeight: "200",
                                fontSize: "16px",
                                texlAlign: "right",
                                padding: "0px",
                                margin: "0px"
                            }}
                        >
                            小計
                        </Typography>

                        <Box
                            sx={{
                                // width: "70%",
                                padding: "0px",
                                margin: "0px",
                            }}
                        >

                            <Price price={price * qty} priceWidth={60} priceSize={24} unitSize={16} />
                        </Box>
                    </Box>

                    {/* <Box
                        sx={{
                            flewGlow: 1,
                        }}
                    >
                    </Box> */}

                    <Box
                        sx={{
                            width: "1%",
                            cursor: "pointer"
                            // display: "block"
                        }}
                        onClick={onDelete}
                    >
                        <DeleteForeverIcon />
                    </Box>


                </Box>
                {/* (end)小計 */}

            </Box>


        </Box>
    )

}