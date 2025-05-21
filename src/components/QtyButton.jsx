import React, { useState } from 'react';

import { Box, Button, IconButton, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function QtyButton() {
    const [count, setCount] = useState(0);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => Math.max(0, prev - 1)); // 0未満にしない

    return (
        <div
            style={{
                border: "0.5px solid #cecece",
                borderRadius: "25px",
                width: "120px",
                height : "45px",
                display: 'flex',
                alignItems: 'center',
                justifyContent: "center",
                gap: 8
            }}
        >
            <IconButton
                // variant="text"
                // size="small"
                onClick={decrement}

            >
                <RemoveIcon fontSize="small"/>
            </IconButton>

            <Typography
                sx={{
                    fontWeight: '600',
                    fontSize: "24px"
                }}
            >
                {count}
            </Typography>

            <IconButton
                // variant="text"
                // size="small"
                onClick={increment}
            >
                <AddIcon fontSize="small"/>
            </IconButton>
        </div>
    );
}