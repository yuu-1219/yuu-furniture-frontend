import { Box, Typography } from "@mui/material"

export default function Price({ price }) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                gap: 0.5
            }}
        >
            <Typography
                style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: 0.8
                }}
            >
                {price}
            </Typography>

            <Typography
                style={{
                    fontWeight: "200",
                    fontSize: "12px",
                    lineHeight: 0.8
                }}
            >
                円(税込)
            </Typography>
        </Box>
    )
}