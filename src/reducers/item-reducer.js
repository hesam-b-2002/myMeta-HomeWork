import * as actions from "../action-types/action-types"

const produdtsList=[]
export const itemsReducer=(state=produdtsList,action)=>{
   switch(action.type){
        case actions.LoadProducts:
            var item=action.payload
            return [...item];
        
        
        default:
            return state;
        
        
        
        }
    
}