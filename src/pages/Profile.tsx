import React, {useEffect, useState} from "react";
import {API_USER} from "../constants/API";
import {returnUser} from "../utils/authUtils";
import {User} from "../Types/ProductType";
import {Box, Button, Card, CardContent, TextField, Typography} from "@mui/material";
import useInput from "../hooks/useInput";

const Profile: React.FC<{}> = (props) => {
    const [user, setUser] = useState<User>()
    const {
        isValid: isFirstNameValid,
        value: firstNameValue,
        hasError: firstNameError,
        setValue: setFirstName,
        onChange: onFirstNameChange,
        onBlur: onFirstNameBlur
    } = useInput(enteredValue => true)

    const {
        isValid: isLastNameValid,
        value: lastNameValue,
        hasError: lastNameError,
        setValue: setLastName,
        onChange: onLastNameChange,
        onBlur: onLastNameBlur
    } = useInput(enteredValue => true)

    const {
        isValid: isStreetValid,
        value: streetValue,
        hasError: streetError,
        setValue: setStreet,
        onChange: onStreetChange,
        onBlur: onStreetBlur
    } = useInput(enteredValue => true)

    const {
        isValid: isCityValid,
        value: cityValue,
        hasError: cityError,
        setValue: setCity,
        onChange: onCityChange,
        onBlur: onCityBlur
    } = useInput(enteredValue => true)

    const {
        isValid: isCountryValid,
        value: countryValue,
        hasError: countryError,
        setValue: setCountry,
        onChange: onCountryChange,
        onBlur: onCountryBlur
    } = useInput(enteredValue => true)

    const {
        isValid: isZipValid,
        value: zipValue,
        hasError: zipError,
        setValue: setZip,
        onChange: onZipChange,
        onBlur: onZipBlur
    } = useInput(enteredValue => true)

    useEffect(() => {
        (async () => {
            const userResponse = await fetch(API_USER + `/${returnUser()}`)
            const userData: User = await userResponse.json()
            console.log(userData)
            setUser(userData)
            setFirstName(userData.name.firstName)
            setLastName(userData.name.lastName)
            setStreet(userData.address.street)
            setCity(userData.address.city)
            setCountry(userData.address.country)
            setZip(userData.address.zip)
        })()
    }, [])

    const updateDetails = () => {
        if(isFirstNameValid && isLastNameValid && isStreetValid && isCityValid && isCountryValid && isZipValid) {
            //send update request
        }
    }


    if (!user) {
        return <></>
    }
    return (
        <>
            <Typography variant={"h5"} fontWeight={"bolder"} width={"100%"} textAlign={"center"}>Profile</Typography>
            <Box height={"20px"}/>
            <Card>
                <CardContent>
                    <Box width={"100%"} display={"flex"} justifyItems={"center"} flexDirection={"column"}
                         alignItems={"center"}>
                        <Box width={"20px"}/>
                        <img src={user.avatar} alt={"avatar"}/>
                        <Box width={"20px"}/>
                        <Typography fontWeight={"bolder"} width={"100%"} textAlign={"center"}>Name</Typography>
                        <Box height={"20px"}/>
                        <Box>
                            <Box height={"20px"}/>
                            <Box display={"flex"} width={"100%"} justifyContent={"center"}>
                                <TextField label="First name" variant="outlined" error={firstNameError}
                                           onChange={onFirstNameChange} onBlur={onFirstNameBlur}
                                           value={firstNameValue}
                                />
                                <Box width={"20px"}/>
                                <TextField label="Last name" variant="outlined" error={lastNameError}
                                           onChange={onLastNameChange} onBlur={onLastNameBlur}
                                           value={lastNameValue}
                                />
                            </Box>
                            <Box height={"20px"}/>
                            <Typography fontWeight={"bolder"} width={"100%"} textAlign={"center"}>Address</Typography>
                            <Box height={"20px"}/>
                            <Box display={"flex"} width={"max-content"}>
                                <TextField label="Street" variant="outlined" error={streetError}
                                           onChange={onStreetChange} onBlur={onStreetBlur}
                                           value={streetValue}
                                />
                                <Box width={"20px"}/>

                                <TextField label="City" variant="outlined" error={cityError}
                                           onChange={onCityChange} onBlur={onCityBlur}
                                           value={cityValue}
                                />
                                <Box width={"20px"}/>
                                <TextField label="Country" variant="outlined" error={countryError}
                                           onChange={onCountryChange} onBlur={onCountryBlur}
                                           value={countryValue}
                                />
                                <Box width={"20px"}/>
                                <TextField label="Zip" variant="outlined" error={zipError}
                                           onChange={onZipChange} onBlur={onZipBlur}
                                           value={zipValue}
                                />
                            </Box>
                        </Box>
                        <Box height={"20px"}/>
                        <Button variant={"contained"} onClick={updateDetails}>Update</Button>
                    </Box>
                </CardContent>
            </Card>
        </>
    )


}

export default Profile