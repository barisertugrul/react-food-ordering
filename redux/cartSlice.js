import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products: [],
        discounts: 3.60, // TODO: Get from Database, coupons or settings
        quantity: 0,
        subTotal: 0,
        total: 0,
    },
    reducers:{
        addProduct: (state, action) => {
            state.products.push(action.payload)
            state.quantity += action.payload.quantity
            state.subTotal += (action.payload.price * action.payload.quantity)
        },
        updateCart: (state, action) => {
            state = action.payload
            /*
            state.products = action.payload.products
            state.quantity = action.payload.quantity
            state.subTotal = action.payload.subTotal
            state.discounts = action.payload.discounts
            state.total = action.payload.total
            */
        },
        reset: (state, action) => {
            state.products = []
            state.quantity = 0
            state.total = 0
        },
        removeFromCart: (state, action) => {
            console.log(action.payload)
            state.products = state.products.filter((product) => product.cartUUID !== action.payload.product.cartUUID)
            state.quantity -= action.payload.product.quantity
            state.total -= (action.payload.product.price * action.payload.product.quantity)
        }
    }
})

export const { addProduct, updateCart, reset, removeFromCart } = cartSlice.actions
export default cartSlice.reducer