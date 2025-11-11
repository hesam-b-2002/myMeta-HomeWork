import { useEffect } from "react";
import { tables } from "./tables";
import { loadProducts, reserve_table } from "../actions/actions";
import { useDispatch } from "react-redux";





export const Tablelist=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(loadProducts(tables))

    },[dispatch])
    return(
        <div>
            {tables.map((table,index)=>
            (<>
            <img 
            src={table.src} 
            className={`box-${table}`}
             key={index}/>
             <button style={{backgroundColor: table.avilable===true? 'green' : 'red'}}
             onClick={()=>console.log(dispatch(reserve_table(table)))}>reserve_table</button></>))}
            
        </div>
    )
}