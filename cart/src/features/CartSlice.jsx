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
        removeItem : (state , action) => {
            const itemId = action.payload;
            state.items = state.items.filter((item)=> item.id !== itemId);
        },
    }
})

// console.log(CartSlice);

export const {clearCart,removeItem} = CartSlice.actions;
export default CartSlice.reducer