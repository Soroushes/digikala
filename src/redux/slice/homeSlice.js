import {createSlice} from "@reduxjs/toolkit";
let initialState = {loading : true} ;
const homeSlice = createSlice({
    initialState ,
    name : "home" ,
    reducers : {
        ITEMS : (state , action)=>{
            return action.payload;
        }
    }
})
export default homeSlice.reducer ;
export const {ITEMS} = homeSlice.actions ;