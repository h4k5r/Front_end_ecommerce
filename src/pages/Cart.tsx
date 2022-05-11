import {Box, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import CartItem from "../components/CartItem/CartItem";
import {useEffect, useState} from "react";
import {ProductType} from "../Types/ProductType";
import {API_PRODUCTS} from "../constants/API";

const Cart = () => {
    const cart = useSelector((state: RootState) => state.cart)
    const [fetchedProducts, setProducts] = useState<{
        product: ProductType,
        quantity: number
    }[]>([])
    const [total, setTotal] = useState<number>(0)
    useEffect(() => {
        (async () => {
            const products: {
                product: ProductType,
                quantity: number
            }[] = []
            for (const value of cart) {
                const response = await fetch(API_PRODUCTS + `/${value.id}`)
                const data = await response.json()
                products.push({
                    quantity: value.quantity,
                    product: data
                })

            }
            let tempTotal = 0

            products.forEach(value1 => {
                console.log(value1)
                tempTotal += Math.floor((value1.product.price - (value1.product.price * (value1.product.discount / 100))))  * value1.quantity
            })
            console.log(tempTotal)
            setTotal(tempTotal)
            setProducts(prevState => {
                return [...products]
            })
        })()
    }, [cart])
    // for ()
    return (
        <Box>
            <Typography textAlign={"center"} width={"inherit"} fontWeight={"bolder"} variant={"h5"}>Shopping
                Cart</Typography>
            <Box height={"20px"}/>
            {fetchedProducts.map((value, index) => <CartItem product={value.product} quantity={value.quantity}
                                                             key={index}/>)}
            <Typography textAlign={"left"} width={"inherit"} fontWeight={"bolder"} >total : £{total}</Typography>
        </Box>
    )
}
export default Cart