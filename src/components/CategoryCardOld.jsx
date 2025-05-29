import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { categories } from '../constants/categories';


export default function CategoryCardOld () {
    return (
        <>

            {/* (start)タイトル~メインパーツ表示レイアウト */}
            <Box
                sx={{
                    width: "100%",
                    padding: "20px 20px",
                    margin: "0px 0px",
                    // maxWidth: "800px",
                    backgroundColor: "rgba(251, 245, 230, 0.8)",
                    borderRadius: "10px",
                    border: "0.2px solid #eee9d3",
                    display: "flex",
                    flexDirection: "column",
                    flexDirection: {
                        xs: "row",
                        md: "column",
                    },
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                }}
            >

                <Typography
                    variant="h6"
                    sx={{
                        fontSize: {
                            xs: "10px",
                            sm: "13px",
                            md: "15px",
                            lg: "20px"
                        },
                        fontWeight: "600",
                        margin: "0px 10px 10px 10px",
                        padding: "0px 0px",
                        textAlign: "center"
                    }}
                >
                    カテゴリーから選ぶ
                </Typography>

                {/* カテゴリーリスト */}
                <List sx={{
                    width: "100%",
                    display: {
                        xs: "flex",
                        md: "block"
                    },
                    flexWrap: {
                        xs: "wrap",
                        md: "nowrap"
                    },
                }}
                >
                    {/* 全ての商品 */}
                    <ListItem
                        sx={{
                            padding: "0px",
                            margin: "0px",
                        }}
                    >
                        <ListItemButton
                            component={Link}
                            to="/products"
                        >
                            <ListItemText
                                primary="全ての商品"
                                primaryTypographyProps={{
                                    sx: {
                                        fontSize: {
                                            xs: "10px",
                                            sm: "12px",
                                            md: "14px",
                                            lg: "16px"
                                        },
                                        fontWeight: "500"
                                    }
                                }}
                            />
                            <ListItemIcon sx={{ minWidth: "auto" }}>
                                <KeyboardArrowRightIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    {/* 各カテゴリー */}
                    {categories.map((category) => (
                        <ListItem
                            key={category.categoryId}
                            sx={{
                                padding: "0px",
                                margin: "0px"
                            }}
                        >
                            <ListItemButton
                                component={Link}
                                to={`/products?category=${category.categoryId}`}
                            >
                                <ListItemText
                                    primary={category.categoryLabel}
                                    primaryTypographyProps={{
                                        sx: {
                                            fontSize: {
                                                xs: "12px",
                                                sm: "14px",
                                                md: "15px",
                                                lg: "16px"
                                            },
                                            fontWeight: "500"
                                        }
                                    }}
                                />
                                <ListItemIcon sx={{ minWidth: "auto" }}>
                                    <KeyboardArrowRightIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Box>
        </>
    )
}