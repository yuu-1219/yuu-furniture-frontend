import React, { useState } from 'react';

import { Box, Typography } from '@mui/material';

export default function RunButton({text, width=300, height=35, handleClick}) {

    return (
        <Box
            sx={{
                border: "0.5px solid #cecece",
                borderRadius: "25px",
                backgroundColor: "#fdc757",
                width: `${width}px`,
                // padding: "20px 60px",
                height: `${height}px`,
                cursor: "pointer",
                display: 'flex',
                alignItems: 'center',
                justifyContent: "center"
            }}
            onClick={handleClick}
        >
            <Typography
                sx={{
                    fontWeight: '600',
                    fontSize: "18px",
                    color: "#535353",
                    // width: `${width}px`,
                }}
            >
                {text}
            </Typography>
        </Box>
    );
}