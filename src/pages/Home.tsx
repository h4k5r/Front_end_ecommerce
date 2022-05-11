import React from "react";
import {ProductType} from "../Types/ProductType";
import {Box, Grid, Pagination} from "@mui/material";
import Product from "../components/Product/Product";

const Home: React.FC<{ products: ProductType[] }> = (props) => {
    const {products} = props

    return (
        <>

            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                {products.map(
                    (value, index) => <Product product={value} key={index}/>
                )}
            </Grid>
            <Box minWidth={"100%"} display={"flex"} justifyContent={"center"}>
                <Pagination count={10} showFirstButton showLastButton/>
            </Box>
        </>
    );
}
export default Home
