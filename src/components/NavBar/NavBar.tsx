import React from "react";
import {Box, Drawer, IconButton, TextField} from "@mui/material";
import useInput from "../../hooks/useInput";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {HistoryRounded, HomeRounded, Person, SearchRounded} from "@mui/icons-material";
import {NavLink, useNavigate, useRoutes} from "react-router-dom";


const NavBar: React.FC<{}> = () => {
    const {
        isValid: isSearchValueValid,
        value: searchValue,
        hasError: emailError,
        setValue: setSearch,
        onChange: onSearchValueChange,
        onBlur: onSearchValueBlur
    } = useInput(enteredValue => true)
    const navigate = useNavigate()

    const onSearchClick = () => {
        if (isSearchValueValid) {
            navigate(`/search/${searchValue}`)
        }
    }

    return (
        <Box minWidth={"100%"} display={"flex"} justifyContent={"space-between"}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <TextField label="Search" variant="outlined" error={emailError}
                           onChange={onSearchValueChange}
                           onBlur={onSearchValueBlur}/>
                <Box width={"10px"}/>
                <IconButton color="primary" onClick={onSearchClick}>
                    <SearchRounded/>
                </IconButton>
            </Box>
            <Box height={"inherit"} display={"flex"} alignItems={"center"}>

                <NavLink to={"/"}>
                    <IconButton color="primary">
                        <HomeRounded/>
                    </IconButton>
                </NavLink>

                <NavLink to={"/profile"}>
                    <IconButton color="primary">
                        <Person/>
                    </IconButton>
                </NavLink>

                <NavLink to={"/cart"}>
                    <IconButton color="primary">
                        <AddShoppingCartIcon/>
                    </IconButton>
                </NavLink>


            </Box>
        </Box>
    )
}
export default NavBar