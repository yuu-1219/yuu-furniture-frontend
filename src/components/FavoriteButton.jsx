import { useFavorites } from '../contexts/FavoriteContext';

import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function FavoriteButton({ productId }) {
    // const { favorites, toggleFavorite } = useFavorites();
    // const isFavorited = favorites.includes(productId);
    const isFavorited = 1;


    return (
        // <IconButton onClick={() => toggleFavorite(productId)}>
        //     {isFavorited ? <Favorite color="error" /> : <FavoriteBorder />}
        // </IconButton>

        isFavorited ?
            <FavoriteIcon
                onClick={() => toggleFavorite(productId)}
                style={{
                    color: "red"
                }}
            />
            : 
            <FavoriteBorderIcon 
                onClick={() => toggleFavorite(productId)}
                // style={{
                //     fontSize: "10px"
                // }}
            />
    );
}
