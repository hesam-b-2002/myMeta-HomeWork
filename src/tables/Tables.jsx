import { useEffect } from "react";
import { tables } from "./tables";
import { loadProducts, reserve_table,select_time } from "../actions/actions";
import { useDispatch } from "react-redux";


export const Tablelist=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(loadProducts(tables))

    },[dispatch])
    return(
        <div>
            {tables.map((table,index)=>(
            <>

            <img 
            src={table.src} 
            className={`box-${table}`}
             key={index}/>

            <button 
            style=
            {{
                backgroundColor: table.avilable===true? 'green' : 'red'
            }}
             onClick={()=>
                console.log(dispatch(reserve_table( table)
            ))}
             >reserve_table
             </button>
             <select
             onClick={
                (e)=>
                    console.log(dispatch(select_time(e.target.value)
            ))}
             >{
             table.avilable_times.map((
                avilable_time,index)=>
                    <option key={index}>{avilable_time}</option>
                )
             }</select>

             </>
             ))}
            
        </div>
    )
}