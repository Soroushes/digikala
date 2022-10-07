import {createSlice} from "@reduxjs/toolkit";
const initialState = {}
const singleProductsSlice = createSlice({
    initialState ,
    name : 'product page' ,
    reducers : {
      SET : (state, action)=>{
          return action.payload;
      } ,
      SELECT : (state, action)=>{
          return {
              ...state ,
              selected : action.payload
          }
      },
        SIMPLE : (state, action)=>{
            return {
                ...state ,
                simple : action.payload
            }
        }
    }
})
export default singleProductsSlice.reducer;
export const {SET , SELECT , SIMPLE} = singleProductsSlice.actions ;