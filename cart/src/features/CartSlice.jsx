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

const CartSlice = createSlice({
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
        increase : (state , {payload}) => {
            // const newItem = state.items.find((item)=> item.id === payload );
            // newItem.amount = newItem.amount + 1 ;
            const newItems = state.items.map((item)=>{
                if(item.id === payload) {
                    return {...item , amount: item.amount + 1}
                }
                return item
            })
            state.items = newItems;
        },
        decrease : (state , {payload}) => {
            const newItem = state.items.find((item)=> item.id === payload);
            newItem.amount = newItem.amount - 1 ;
        },
        totals : (state) => {
            let amount=0;
            let total=0;
            state.items.map((item)=>{
                amount = amount + item.amount;
                total = total + (item.amount * item.price);
            })
            state.amount = amount;
            state.total = total;
        }
    }
})

// console.log(CartSlice);

export const {clearCart,removeItem , increase , decrease ,totals} = CartSlice.actions;
export default CartSlice.reducer