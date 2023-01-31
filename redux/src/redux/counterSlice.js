import { createSlice } from "@reduxjs/toolkit"; 
  
const sliceCounter=createSlice(
    {
        name:"counter",
        initialState:{
            count:0
        },
        reducers:{
            add:(state)=>{
                state.count=state.count+1
            },
            jian:(state)=>{
                state.count=state.count-1
            },
            reset:(state)=>{
                state.count=0
            },
            setnumber:(state,action)=>{
                state.count=state.count+(action.payload)*1
        }
        }        
    })
export const {add,jian,reset,setnumber}= sliceCounter.actions;
export default sliceCounter.reducer;