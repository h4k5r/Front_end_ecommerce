import React, {useEffect, useState} from "react";
import {useParams, useRoutes} from "react-router-dom";
import {API_SEARCH} from "../constants/API";
import {ProductType} from "../Types/ProductType";
import {Box, Grid, Pagination, Typography} from "@mui/material";
import Product from "../components/Product/Product";

const Search: React.FC<{}> = () => {
    const params = useParams()
    const [fetchedProducts, setFetchedProducts] = useState<ProductType[]>([])

    console.log(params.keyword)
    useEffect(() => {
        (async () => {
            try {
                const searchResponse = await fetch(API_SEARCH + params.keyword)
                const searchData = await searchResponse.json()
                setFetchedProducts(searchData)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [params.keyword])
    return <>
        {
            params.keyword !== "" && fetchedProducts.length > 0 ? <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                {fetchedProducts.map(
                    (value, index) => <Product product={value} key={index}/>
                )}
            </Grid> : <Typography>No Results</Typography>
        }


    </>
}
export default Search