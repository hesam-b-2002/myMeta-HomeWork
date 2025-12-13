
import { useSelector,useDispatch } from "react-redux"
import { finalize } from "../actions/actions"
export const DashBoard=()=>{
      const chosen_tables=useSelector((state)=>state.table)
       const dispatch=useDispatch()
       return( <div
             style={{
               display: "grid",
               gridTemplateColumns: "repeat(3, 1fr)",
               gap: "20px",
               padding: "20px",
             }}
           >
             {chosen_tables.map((chosen_table) =>{ 
                  if(chosen_table.chosen_time.length > 0 ){
                        return(
               <div
                 key={chosen_table.id}
                 style={{
                   background: "#f8f8f8",
                   padding: "16px",
                   borderRadius: "12px",
                   boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                 }}
               >
                 <img
                   src={chosen_table.src}
                   alt={`chosen_table number ${chosen_table.id}`}
                   style={{
                     width: "100%",
                     height: "180px",
                     objectFit: "cover",
                     borderRadius: "8px",
                     marginBottom: "10px",
                   }}
                 />
       
                 <p style={{ marginBottom: "8px", fontWeight: 600 }}>
                   {chosen_table.price} — {chosen_table.position}
                   —
                   time_selected:{chosen_table.chosen_time}
                 </p>
               </div>
             )}
       
             
             })}
           </div>

       )}