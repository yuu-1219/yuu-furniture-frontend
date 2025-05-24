import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Price from "./Price";

import { products } from "../constants/products";

import { useUser } from '../contexts/UserContext';


export default function Orders({ orderId }) {
    const { user } = useUser();
    const order = user.orders.find(c => c.orderId === orderId);
    const { items, totalPrice, purchasedAt } = order;
    const purchaseDate = new Date(purchasedAt).toLocaleString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    })


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


                {/* (start)注文番号 */}
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        // alignItems: "flex-start",
                        // justifyContent: "space-between",
                    }}
                >
                    <Typography
                        sx={{
                            width: "60%",
                            fontSize: "18px",
                            fontWeight: "600",
                            textAlign: "left"
                        }}
                    >
                        {`注文番号 : ${orderId}`}
                    </Typography>

                    <Typography
                        sx={{
                            width: "40%",
                            fontSize: "16px",
                            fontWeight: "500",
                            textAlign: "right"
                        }}
                    >
                        {`注文日 : ${purchaseDate}`}
                    </Typography>

                </Box>
                {/* (end)注文番号 */}



                {/* (start)購入商品 */}
                <Box
                    sx={{
                        padding: "0px",
                        margin: "20px 20px 20px 20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                    }}
                >

                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: "600",
                        }}
                    >
                        購入商品
                    </Typography>

                    {items.map((item) => {
                        const product = products.find(c => c.productId === item.productId);
                        const { productId, name, price, img } = product;

                        return (
                            <>
                                <Box
                                    sx={{
                                        display: "flex",
                                        // alignItems: "flex-start",
                                        alignItems: "flex-start",
                                        justifyContent: "space-between",
                                    }}
                                >

                                    {/* (start)商品概要 */}
                                    <Box
                                        sx={{
                                            padding: "0px",
                                            margin: "20px 0px 20px 0px",
                                            width: "70%",
                                            display: "flex",
                                            alignItems: "space-between",
                                            justifyContent: "flex-start",
                                        }}
                                    >

                                        {/* (start)商品画像 */}
                                        <Box
                                            sx={{
                                                width: "30%",
                                            }}
                                        >
                                            <img
                                                src={img}
                                                alt={name}
                                                style={{
                                                    width: "100%",
                                                    // maxWidth: "250px",
                                                    height: "auto",
                                                    // maxHeight: "150px",
                                                    objectFit: "cover",
                                                    aspectRatio: "4 / 3"
                                                }}
                                            />
                                        </Box>
                                        {/* (end)商品画像 */}



                                        {/* (start)商品説明 */}
                                        <Box
                                            sx={{
                                                width: "70%",
                                            }}
                                        >

                                            <Box
                                                sx={{
                                                    width: "100%",
                                                    height: "100%",
                                                    padding: "2px 0px 0px 25px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "flex-start",
                                                    justifyContent: "space-between",
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
                                                        padding: "15px 0px 0px 3px",
                                                        fontSize: "14px",
                                                        fontWeight: "500",

                                                    }}
                                                >
                                                    {`商品コード : ${productId}`}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        padding: "5px 0px 0px 3px",
                                                        fontSize: "14px",
                                                        fontWeight: "500",

                                                    }}
                                                >
                                                    {`カラー : ${item.color}`}
                                                </Typography>

                                                <Box
                                                    sx={{
                                                        padding: "5px 0px 0px 0px"

                                                    }}
                                                >

                                                    <Price price={price} priceWidth={43} priceSize={20} unitSize={14} />

                                                </Box>

                                                <Typography
                                                    sx={{
                                                        padding: "5px 0px 0px 3px"

                                                    }}
                                                >
                                                    {`数量 : ${item.quantity}`}
                                                </Typography>

                                            </Box>
                                        </Box>
                                        {/* (end)商品説明 */}

                                    </Box>
                                    {/* (end)商品概要 */}


                                    {/* (start)小計 */}
                                    <Box
                                        sx={{
                                            width: "30%",
                                            // height: "auto",
                                            display: "flex",
                                            // flexDirection: "column",
                                            alignItems: "flex-end",
                                            // justifyContent: "flex-end",
                                            marginTop: "auto",
                                        }}
                                    >
                                        {/* <Box
                                            sx={{
                                                flexGlow: 1
                                            }}
                                        ></Box> */}
                                        <Box
                                            sx={{
                                                width: "100%",
                                                padding: "0px",
                                                margin: "0px 0px 10px 0px",
                                                display: "flex",
                                                alignItems: "baseline",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    width: "20%",
                                                    fontWeight: "200",
                                                    fontSize: "14px",
                                                    textAlign: "right",
                                                    padding: "0px",
                                                    margin: "0px"
                                                }}
                                            >
                                                小計
                                            </Typography>

                                            <Box
                                                sx={{
                                                    width: "45%",
                                                    padding: "0px",
                                                    margin: "0px",
                                                }}
                                            >

                                                <Price price={price * item.quantity} priceWidth={60} priceSize={24} unitSize={14} />
                                            </Box>
                                        </Box>

                                    </Box>
                                    {/* (end)小計 */}

                                </Box>
                                <Divider sx={{ width: '100%', my: 1 }} />
                            </>
                        );
                    })}


                </Box >
                {/* (end)購入商品 */}


                {/* (start)金額表示 */}
                <Box
                    sx={{
                        width: "50%",
                        height: "50%",
                        padding: "0px",
                        margin: "10px 0px 0px 0px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start"
                    }}
                >
                    {/* (start)商品代金 */}
                    <Box
                        sx={{
                            width: "100%",
                            padding: "0px 0px 0px 0px",
                            margin: "0px 20px 0px 20px",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "baseline",
                        }}
                    >
                        <Typography
                            sx={{
                                width: "20%",
                                fontSize: "16px",
                                fontWeight: "500",
                                textAlign: "center"

                            }}
                        >
                            商品
                        </Typography>

                        <Typography
                            sx={{
                                width: "40%"
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
                            padding: "0px 0px 0px 0px",
                            margin: "0px 20px 0px 20px",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "baseline",

                        }}
                    >
                        <Typography
                            sx={{
                                width: "20%",
                                fontSize: "16px",
                                fontWeight: "500",
                                textAlign: "center"
                            }}
                        >
                            送料
                        </Typography>

                        <Typography
                            sx={{

                                width: "40%"
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
                            padding: "0px 0px 0px 0px",
                            margin: "0px 20px 0px 20px",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "baseline",
                        }}
                    >
                        <Typography
                            sx={{
                                width: "20%",
                                fontSize: "16px",
                                fontWeight: "500",
                                textAlign: "center"

                            }}
                        >
                            合計
                        </Typography>

                        <Typography
                            sx={{
                                width: "40%"
                            }}
                        >
                            <Price price={750 + totalPrice} priceSize={24} unitSize={16} priceWidth={58} />
                        </Typography>
                    </Box>
                    {/* (end)合計代金 */}


                </Box>
                {/* (end)金額表示 */}




            </Box>
        </Box>
    )
}

