import { useState } from "react"
import { useDispatch } from "react-redux"
import TodoItem from "./TodoItem"
import { addlist,searchWord} from "./todoSlice"
function Todo (){
     const[cont,setCont]=useState()
     const[date,setDate]=useState()
     const[time,setTime]=useState()
     const[searchall,setSearchall]=useState()
     const dispatch=useDispatch()
     const addListCont=()=>{
        dispatch(addlist({date,time,cont}))
        setCont("")
        setDate("")
        setTime("")
     }
     const handleSearch=()=>{
        
       dispatch(searchWord(searchall));
       setSearchall("")
       console.log("aaa");
     }
    return(
        <div>
         <input value={cont} onChange={(e)=>{setCont(e.target.value)}}/>
         <input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}}/>
         <input type="time" value={time} onChange={(e)=>{setTime(e.target.value)}}/>
         <button onClick={addListCont}>增加</button>
         <input  value={searchall} onChange={(e)=>{setSearchall(e.target.value)}}/>
         <button onClick={handleSearch}>搜索</button>
         <div>
         <TodoItem/>
         </div>
        </div>
    )
}
export default Todo