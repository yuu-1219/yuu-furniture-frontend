import Rating from "@mui/material/Rating";
import { useState } from "react";

export default function Review( {value} ) {
    // const [score, setScore] = useState(value);

    return (
        <>
            <Rating
                size="small"
                name="simple-controlled"
                precision={1}
                value={value}
                // onChange={(event, newValue) => {
                //     setScore(newValue);
                // }}
            />
        </>

    );

}