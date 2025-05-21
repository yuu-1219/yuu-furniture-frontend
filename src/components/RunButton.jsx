import React, { useState } from 'react';

import {Typography } from '@mui/material';

export default function RunButton({text, hundleClick}) {

    return (
        <div
            style={{
                border: "0.5px solid #cecece",
                borderRadius: "25px",
                backgroundColor: "#fdc757",
                width: "300px",
                height: "45px",
                cursor: "pointer",
                display: 'flex',
                alignItems: 'center',
                justifyContent: "center"
            }}
            onclick={hundleClick}
        >
            <Typography
                sx={{
                    fontWeight: '600',
                    fontSize: "18px",
                    color: "#535353"
                }}
            >
                {text}
            </Typography>
        </div>
    );
}