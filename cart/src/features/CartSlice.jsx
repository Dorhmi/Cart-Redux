import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
// import { openModal } from "./ModalSlice";


const url = 'https://course-api.com/react-useReducer-cart-project';



const initialState = {
    items : [],
    total : 0,
    amount : 0,
    isLoading : true,
}

export const fetchItems = createAsyncThunk('cart/fetchItems' , 
    async(_,thunkAPI)=>{
        try {
            const response = await axios(url)
            // console.log(response);
            // console.log(thunkAPI);
            // thunkAPI.dispatch(openModal())
            return response.data
        } catch (error) {
            thunkAPI.rejectWithValue('something went wrong')
        }
})

// export const fetchItems = createAsyncThunk('cart/fetchItems' , ()=>{
//     return fetch(url)
//     .then(response => response.json())
//     .catch((err)=>console.log(err));
// })

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
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchItems.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchItems.fulfilled, (state,action) => {
            // console.log(action);
            state.items = action.payload
            state.isLoading = false
        })
        .addCase(fetchItems.rejected, (state,action) => {
            console.log(action);
            state.isLoading = false
        })
    }
})

// console.log(CartSlice);

export const {clearCart,removeItem , increase , decrease ,totals} = CartSlice.actions;
export default CartSlice.reducer