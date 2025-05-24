import { Box, Typography } from "@mui/material"

export default function Price({ price, priceSize=20, unitSize=12, height=0.8, priceWidth=50 }) {
    return (
        <Box
            sx={{
                width: "100%",
                // maxWidth: "100px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
                gap: 0.5
            }}
        >
            <Typography
                style={{
                    fontWeight: "600",
                    fontSize: `${priceSize}px`,
                    width: `${priceWidth}px`
                }}
            >
                {price}
            </Typography>

            <Typography
                style={{
                    fontWeight: "200",
                    fontSize: `${unitSize}px`,
                }}
            >
                円(税込)
            </Typography>
        </Box>
    )
}