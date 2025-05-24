import Rating from "@mui/material/rating";
import { useState } from "react";

export default function Review( {value} ) {
    const [score, setScore] = useState(value);

    return (
        <>
            <Rating
                name="simple-controlled"
                precision={0.5}
                value={score}
                // onChange={(event, newValue) => {
                //     setScore(newValue);
                // }}
            />
        </>

    );

}