import {configureStore} from "@reduxjs/toolkit"
import CartSlice from './features/CartSlice'
import ModalSlice from './features/ModalSlice'


export const store = configureStore({
    reducer: {
        cart : CartSlice,
        modal : ModalSlice,
    }
})