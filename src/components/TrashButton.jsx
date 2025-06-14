import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

export default function TrashButton({ productId, removeProduct }) {
    const deleteProduct = () => {
        removeProduct(productId);
    }

    return (
        <DeleteForeverRoundedIcon
            onClick={() => deleteProduct()}
            style={{
                color: "#7a7a7a",
                cursor: "pointer"
            }}
        />
    );
}