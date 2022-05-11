import React from "react";
import {ProductType} from "../../Types/ProductType";
import {Box, Button, Card, Grid, Stack, Typography} from "@mui/material";
import {useDispatch } from 'react-redux'
import {CartActions} from "../../store/cartSlice";

const Product: React.FC<{ product: ProductType }> = (props) => {
    const {product} = props
    const dispatch = useDispatch()
    const onAddToCartClicked = () => {
        dispatch(CartActions.addToCart({product}))
    }
    return (
        <>
            <Grid item xs={2} sm={4} md={4}>
                <Card>
                    <img src={product.defaultImage} alt={product.name}/>
                    <Stack margin={"10px"}>

                        <Typography marginBottom={2} variant={"h5"}
                                    fontWeight={"bolder"}>
                            {product.name}
                        </Typography>

                        <Typography>{product.description.slice(0, 50)}...</Typography>

                        <Box height={"10px"}/>


                        <Grid container spacing={2} columns={16}>
                            <Grid item xs={8}>
                                <Typography style={{textDecoration: "line-through"}}>£{product.price}</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography
                                    fontWeight={"bolder"}>£{Math.floor((product.price - (product.price * (product.discount / 100))))}</Typography>
                            </Grid>
                        </Grid>

                        <Box height={"10px"}/>
                        <Button variant="contained" onClick={onAddToCartClicked}>Add to Cart</Button>
                    </Stack>
                </Card>
            </Grid>

        </>
    )
}
export default Product


