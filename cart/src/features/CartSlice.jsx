import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items : [],
    total : 0,
    amount : 0,
    isLoading : true,
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
})

console.log(CartSlice);

export default CartSlice.reducer