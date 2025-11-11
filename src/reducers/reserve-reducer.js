
import * as actions from "../action-types/action-types"

const table=[]


export const reservReducer=(state=table,action)=>{
    switch(action.type){
        case actions.Reserve_table:
            const is_avilable=action.payload.avilable===true
            if (is_avilable )
                return [...state,action.payload.avilable=false]
            else
                alert('not avilable')
        
        default:
            return state;
    
    }
}