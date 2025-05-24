import { useState } from "react";

import Box from '@mui/material/Box';

import CheckIcon from '@mui/icons-material/Check';
import { StoreMallDirectory } from '@mui/icons-material';

export default function ColorCard({ color, onColors, setOnColors }) {
    const { colorId, colorLabel, hex } = color;

    const isSelected = onColors.includes(color);

    const handleToggle = () => {
        if (isSelected) {
            setOnColors(onColors.filter(c => c.colorId !== colorId));
        } else {
            setOnColors([...onColors, color]);
        }

    }
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "50px",
                maxHeight: "60px",
                padding: "4px",
                margin: "5px",
                border: "0.5px solid #cecece",
                backgroundColor: "#faf6ec",
                borderRadius: "4px"

            }}
            onClick={handleToggle}

        >

            <Box sx={{
                border: "0.5px solid #cecece",
                borderRadius: "25px",
                width: "25px",
                height: "25px",
                margin: "2px",
                backgroundColor: hex,
                cursor: "pointer"
            }}>
                {isSelected && (
                    <CheckIcon
                        sx={{
                            fontSize: "medium",
                            color: color.colorLabel === "ブラック" ? "#ffffff" : "#000000"

                        }}
                    />
                )}


            </Box>
            <p style={{
                fontWeight: "500",
                fontSize: "10px",
                marginBottom: "0px"
            }}>
                {colorLabel}
            </p>
        </Box>

    )

}