import { createSlice,nanoid } from "@reduxjs/toolkit"; 
const initialState = [{id:"1",date:"2022-12-3",time:"19:00",cont:"玩游戏"},
{id:"2",date:"2022-12-4",time:"16:00",cont:"学习"},
{id:"3",date:"2022-12-5",time:"12:00",cont:"看戏"}]
const todoSlice=createSlice(
    {
        name:"todolist",
        initialState,
        reducers:{
            addlist(state,action){
                state=state.push({
                    id:nanoid(),
                    date:action.payload.date,
                    time:action.payload.time,
                    cont:action.payload.cont
                })
            },
            delList(state,action){
             const newlist=state.filter((a)=>(a.id!==action.payload))
             return state= newlist;
            },
            searchWord(state,action){
                console.log(action)
                const searchList=state.filter((item)=>(item.cont.toLowerCase().includes(action.payload.toLowerCase())))
                console.log(searchList)
                return state= searchList;
            }
        }   
    })

export const {addlist,delList,searchWord}= todoSlice.actions;
export default todoSlice.reducer;