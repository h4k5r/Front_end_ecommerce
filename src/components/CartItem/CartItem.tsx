import React, {useEffect, useState} from "react";
import {Box, Card, CardContent, Typography} from "@mui/material";
import {CartItemType, ProductType} from "../../Types/ProductType";
import {API_PRODUCTS} from "../../constants/API";
import {useDispatch} from "react-redux";
import {CartActions} from "../../store/cartSlice";

const CartItemComponent: React.FC<{ product: ProductType,quantity:number }> = (props) => {
    const {product,quantity} = props

    const total = quantity * Math.floor((product.price - (product.price * (product.discount / 100))))


    return (<>
            <Card>
                <CardContent>
                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                        <Box width={"max-content"} display={"flex"} justifyContent={"space-between"}
                             alignItems={"center"}>
                            <Typography variant={"h6"}>{product.name}</Typography>
                            <Box width={"20px"}/>
                            <Typography variant={"h6"}>count : {quantity}</Typography>

                        </Box>
                        <Typography
                            fontWeight={"bold"}>£{total}</Typography>
                    </Box>
                </CardContent>
            </Card>
            <Box height={"20px"}/>

        </>
    )
}
export default CartItemComponent