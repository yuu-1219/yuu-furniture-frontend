import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Price from "./Price";
import Review from "./Review";

export default function ProductCard({ product }) {
    const { productId, name, price, img, rating } = product;
    return (
        // <Link to={`/products/${productId}`}>
        <Box
            component={Link}
            to={`/products/${productId}`}
            state={{ product }}
            sx={{

                width: "100%",
                flex: "1 1 180px",
                // maxWidth: "200px",
                minWidth: "200px",
                minHeight: "200px",
                padding: "20px",
                backgroundColor: "rgba(251, 245, 230, 0.8)",
                borderRadius: "6px",
                border: "0.2px solid #eee9d3",
                textDecoration: "none",
                color: "inherit",

            }}>
            <img
                src={img}
                alt={name}
                style={{
                    width: "100%",
                    maxWidth: "250px",
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
                        fontWeight: "600",
                    }}
                >
                    {name}
                </Typography>

                <Price price={price} priceWidth={43} priceSize={16}/>

                <Review value={rating} />

            </Box>

        </Box>
        // </Link>

    )

}