import { useSelector,useDispatch } from "react-redux"


   
export const Finalize_reservation=()=>{
       const selected_tables=useSelector((state)=>state.table)
       const dispatch=useDispatch()

    return(
        <>
        {selected_tables.filter(
            (selected)=>selected.unavailable_times.length > 0).map
            ((selected_table)=>{
                return(
                    
               <div
                 key={selected_table.id}
                 style={{
                   background: "#f8f8f8",
                   padding: "16px",
                   borderRadius: "12px",
                   boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                 }}
               >
                <h4>this table is reserved</h4>
                 <img
                   src={selected_table.src}
                   alt={`chosen_table number ${selected_table.id}`}
                   style={{
                     width: "100%",
                     height: "180px",
                     objectFit: "cover",
                     borderRadius: "8px",
                     marginBottom: "10px",
                   }}
                 />
       
                 <p style={{ marginBottom: "8px", fontWeight: 600 }}>
                   {selected_table.price} — {selected_table.position}
                   —
                   time_selected:{selected_table.unavailable_times}
                 
                   
                 </p>
               </div>
             )
            })}
        </>
    )
}