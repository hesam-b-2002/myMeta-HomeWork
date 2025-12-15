
import * as actions from "../action-types/action-types"
import { tables} from "../tables/tables";
const table_items=tables
export const reservReducer=(state=table_items,action)=>{
    switch(action.type){
      case actions.LoadProducts:
        return state;
      case actions.Select_time:
        const table_id=action.payload.table.id
        const table_time=action.payload.time
        return state.map((table)=>{
          if (table.id===table_id)
         { return(
            {...table, chosen_time:[table_time]}
          )}
          if(table.chosen_time.includes(table_time)){
            return table;
            
          }
         
          else 
            return table;
        });

        case actions.Clear:
          return state.map((t)=>{
            if(t.chosen_time.length > 0){
              return {...t,chosen_time:[]}
            }else{
              return t;
            }
          })

     
        case actions.Finalize:
          const selcted_tableId=action.payload.chosen_table.id
        const selected_time=action.payload.time
          return state.map((selcted_table)=>{
            if(selcted_table.id===selcted_tableId){
              return { ...selcted_table,unavailable_times:[selected_time],chosen_time:[]}
            }else{
              return selcted_table;
            }
          });
      default:
          return state;
    
    } 
}
//redux pattern :
// return fucking everything update one thing 
// [bluh , bluh , updated_fucking_shit , bluh , bluh ]
// my first fucking action is supposed to give an updated arrey -->
//    --> which is an updated chosen_time arrey containing ur fucking chosen time
// my second action is suppose to give the next fucking updated arrey -->
// which is reflected on my fucking ui 
