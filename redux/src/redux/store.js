import { configureStore } from '@reduxjs/toolkit'
import sliceCounter from "./counterSlice"
import todoSlice from "./todoSlice"
export const store=configureStore({
    reducer:{
       counter: sliceCounter,
       list: todoSlice
    }
})