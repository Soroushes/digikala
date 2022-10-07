import {createSlice} from "@reduxjs/toolkit";
const initialState  = [] ;
const cartSlice = createSlice({
    name : 'cart' ,
    initialState ,
    reducers : {
        CHECK_CART :(state , action)=>{
            return action.payload ;
        }
    }
})
export default cartSlice.reducer ;
export const {CHECK_CART} = cartSlice.actions ;