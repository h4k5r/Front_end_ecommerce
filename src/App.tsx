import React, {useEffect, useState} from 'react';
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Banner from "./components/Banner/Banner";
import {Box, Container} from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import {CartType, ProductType} from "./Types/ProductType";
import {API_CARTS, API_PRODUCTS} from "./constants/API";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import {returnUser} from "./utils/authUtils";
import {useDispatch} from "react-redux";
import {CartActions} from "./store/cartSlice";
import Search from "./pages/Search";

function App() {

    const [fetchedProducts, setFetchedProducts] = useState<ProductType[]>([])
    const [bannerProduct, setBannerProduct] = useState<ProductType>({
        "id": 0,
        "name": "",
        "description": "",
        "defaultImage": "",
        "images": [
            "",
            "",
            "",
            ""
        ],
        "price": 0,
        "discount": 0
    })

    const dispatch = useDispatch()


    useEffect(() => {
        (async  () => {
            const cartResponse = await fetch(API_CARTS + `/${returnUser()}`)
            const cartData: CartType = await cartResponse.json();
            dispatch(CartActions.initCart({cart: cartData}))
        })();
        (async () => {
            try {
                const productsResponse = await fetch(API_PRODUCTS)
                const productsData: ProductType[] = await productsResponse.json()
                setFetchedProducts(productsData)
                setBannerProduct(productsData[0])



            } catch (e) {
                console.log(e)
            }
        })();
    }, [dispatch])


    return (
        <Container maxWidth={"xl"}>

            <Banner product={bannerProduct}/>

            <Box height={"20px"}/>
            <NavBar/>
            <Box height={"20px"}/>

            <Routes>

                <Route path="/" element={<Home products={fetchedProducts}/>}/>

                <Route path="/cart" element={<Cart/>}/>

                <Route path="/profile" element={<Profile/>}/>

                <Route path="/search/:keyword" element={<Search/>}/>
                <Route path="/search" element={<Search/>}/>




            </Routes>

        </Container>
    );
}

export default App;
