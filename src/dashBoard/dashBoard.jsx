import { Selected_table } from "./selected_tables"

export const DashBoard=()=>{

       return( <div
             style={{
               display: "grid",
               gridTemplateColumns: "repeat(3, 1fr)",
               gap: "20px",
               padding: "20px",
             }}
           >
            <Selected_table/>
          
           
           </div>

       )}