
import * as actions from "../action-types/action-types"

const table=[]


export const reservReducer=(state=table,action)=>{
    switch(action.type){
        case actions.Reserve_table:
            return [...state,action.payload]
            
        default:
            return state;
    
    }
}