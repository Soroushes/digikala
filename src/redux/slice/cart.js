import {createSlice} from "@reduxjs/toolkit";
const initialState  = [] ;
const cartSlice = createSlice({
    name : 'cart' ,
    initialState ,
    reducers : {
        ADD : (state, action)=>{
            state.push(action.payload) ;
        }
    }
})
export default cartSlice.reducer ;
export const {ADD} = cartSlice.actions ;