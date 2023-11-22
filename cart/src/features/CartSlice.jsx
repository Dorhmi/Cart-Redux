import { createSlice } from "@reduxjs/toolkit";
import data from '../Data';

const url = 'https://course-api.com/react-useReducer-cart-project';



const initialState = {
    items : data,
    total : 0,
    amount : 0,
    isLoading : true,
}

// const fetchItems = async () => {
//     const response = await fetch(url)
//     const data = await response.json()

// }

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart : (state) => {
            state.items = [];
        },
    }
})

// console.log(CartSlice);

export const {clearCart} = CartSlice.actions;
export default CartSlice.reducer