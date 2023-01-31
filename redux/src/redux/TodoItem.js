import React from 'react'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { delList} from "./todoSlice"


export default function TodoItem() {
    const dispatch=useDispatch()
    const list=useSelector((state=>{return state.list}))
    const DelList=(item)=>{
    dispatch(delList(item.id))
    }
    const todomap=list.map(item=>(<ul key={item.id}>{item.date}{item.time}{item.cont}
           <button onClick={()=>DelList(item)}> 删除</button></ul>))

  return (
    <div>
   {todomap}
    </div>
  )
}
