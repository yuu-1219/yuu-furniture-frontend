import React, { useState } from 'react';

import { Box, Button, IconButton, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function QtyButton({qty=1, width=120, onIncrement, onDecrement}) {

    // const increment = () => setQty((prev) => prev + 1);
    // const decrement = () => setQty((prev) => Math.max(1, prev - 1)); // 0未満にしない

    return (
        <Box
            sx={{
                border: "0.5px solid #cecece",
                borderRadius: "25px",
                width: `${width}px`,
                height : "45px",
                display: 'flex',
                alignItems: 'center',
                justifyContent: "space-around",
                backgroundColor: "#fffdf7",
                // gap: 1
            }}
        >
            <IconButton
                // variant="text"
                // size="small"
                onClick={onDecrement}

            >
                <RemoveIcon fontSize="small"/>
            </IconButton>

            <Typography
                sx={{
                    fontWeight: '600',
                    fontSize: "24px"
                }}
            >
                {qty}
            </Typography>

            <IconButton
                // variant="text"
                // size="small"
                onClick={onIncrement}
            >
                <AddIcon fontSize="small"/>
            </IconButton>
        </Box>
    );
}