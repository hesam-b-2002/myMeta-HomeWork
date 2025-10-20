import * as actions from "../action-types/action-types"

const initalState={themeValue:'light'}

export const themeReducer=(state=initalState,action)=>{
    switch(action.type){
        case actions.ThemeToggle:
            const secondState=state.themeValue==="light"?'dark':'light'
            return {...state,themeValue:secondState}
                default:
            return state;
    }
}