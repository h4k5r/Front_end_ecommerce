import {CartItemType} from "../Types/ProductType";
import {createSlice} from "@reduxjs/toolkit";


const initCartState: CartItemType[] = []

const CartSlice = createSlice({
    initialState: initCartState,
    name: 'userListSlice',
    reducers: {
        initCart(state, action) {
            const {cart} = action.payload
            state.splice(0, state.length)
            state.push(...cart.products)
        },
        addToCart(state, action) {
            const {product} = action.payload
            console.log(product)
            const item = state.find(cartItem => {
                return cartItem.id === product.id
            })
            if (item) {
                state = state.map(cartItem => {
                    if (cartItem.id === product.id) {
                        cartItem.quantity++
                        return cartItem
                    }
                    return cartItem
                })
            } else {
                console.log("added")
                state.push(
                    {
                        id: product.id,
                        quantity: 1
                    }
                )
            }
        },
        removeFromCart(state, action) {
            const {product} = action.payload

            state = state.filter(cartItem => {
                return !(cartItem.id === product.id)
            })
        },
        clearCart(state, action) {
            state = state.filter(() => false)
        }
    }
})


export const CartActions = CartSlice.actions

export default CartSlice