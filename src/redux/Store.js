import {configureStore} from "@reduxjs/toolkit";
import cartSlice from './slice/cart' ;
import homeSlice from './slice/homeSlice'
import singleProductsSlice from "./slice/singleProductsSlice";
export const store = configureStore({
    reducer : {
        cart : cartSlice ,
        home : homeSlice ,
        singleProduct : singleProductsSlice
    }
})
export default store ;