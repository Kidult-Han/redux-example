import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { add, jian, reset,setnumber } from "./counterSlice"
const Counter=()=>{
    const[inputnum,setInputnum]=useState(0)
  const dispatch=useDispatch()
    const count=useSelector((state=>{return state.counter.count}))
    const resetAll=()=>{
        setInputnum(0);
        dispatch(reset())
    }
return(
    <div>
        <section>
            <div>{count}</div>
        <button onClick={()=>{dispatch(add())}}>加</button>
        <button onClick={()=>{dispatch(jian())}}>减</button>
        <button onClick={resetAll}>R</button>
        <input  type="number" value={inputnum} onChange={(e)=>{setInputnum(e.target.value)}}/>
        <button onClick={()=>{dispatch(setnumber(inputnum))}}>increment</button>
        </section>
    </div>
)

}
export default Counter