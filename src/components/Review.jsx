import Rating from "@mui/material/Rating";

export default function Review( {value} ) {
    return (
        <>
            <Rating
                size="small"
                name="read-only"
                precision={1}
                value={value}
                readOnly
            />
        </>

    );

}