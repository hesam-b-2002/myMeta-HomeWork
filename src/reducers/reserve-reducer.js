
import * as actions from "../action-types/action-types"

const table=[]


export const reservReducer=(state=table,action)=>{
    switch(action.type){
        case actions.Reserve_table:
            const is_avilable=action.payload.avilable===true
            const avilable_times=action.payload.avilable_times
            if (is_avilable )
                return [...state,action.payload.avilable=false]
            else
                alert('not avilable')
        case actions.Select_time:
            
            return [...state]
        default:
            return state;
    
    }
}