import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Price from "./Price";
import Review from "./Review";

export default function ProductCard({ product }) {
    const { _id, name, price, img, rating } = product;
    return (
        // <Link to={`/products/${productId}`}>
        <Box
            component={Link}
            to={`/products/${_id}`}
            state={{ product }}
            sx={{

                width: "100%",
                width: {
                    xs: "45%",
                    sm: "31%",
                    md: "30%",
                    lg: "23%"
                },
                // maxWidth: "200px",
                // minWidth: "200px",
                // minHeight: "200px",
                padding: "20px",
                backgroundColor: "rgba(251, 245, 230, 0.8)",
                borderRadius: "6px",
                border: "0.2px solid #eee9d3",
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",

            }}>
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

            <Box
                sx={{
                    padding: "5px 0px 0px 10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                }}
            >

                <Typography
                    sx={{
                        fontSize: "16px",
                        fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "16px",
                            lg: "16px",
                        },
                        fontWeight: "600",
                    }}
                >
                    {name}
                </Typography>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        textAlign: "left"
                    }}>
                    <Price price={price} priceWidth={43} priceSize={16} />
                </Box>

                <Review value={rating} />

            </Box>

        </Box>
        
        // </Link>

    )

}