import React, {useEffect, useState} from "react";
import {Card, CardContent, ImageListItem, Stack} from "@mui/material";
import {ProductType} from "../../Types/ProductType";

const Banner: React.FC<{ product: ProductType }> = (props) => {
    const {product} = props
    return (
        <>
            <Card>
                <CardContent>
                    <Stack>
                        <ImageListItem >
                            <img style={{height:"25vh"}} src={product.defaultImage} alt={product.name}/>
                        </ImageListItem>
                    </Stack>
                </CardContent>
            </Card>
        </>
    )
}
export default Banner