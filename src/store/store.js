import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "../reducers/item-reducer";
import { themeReducer } from "../reducers/themeReducer";
import { reservReducer } from "../reducers/reserve-reducer";
import { Select_time } from "../action-types/action-types";



const guardMidlleware = store => next =>action=>{
  if(
    action.type===Select_time
  ){
    
    const {table}=action.payload
    const state=store.getState();
    const current_state=state.table.find(
        t=>t.id===table.id
    )
    if(
      current_state.chosen_time.length > 0 
    ){
      alert('time is already slected')
      return;
    }
  }

  return next(action);




}


export const store = configureStore({
  reducer: {
    products: itemsReducer,
    theme: themeReducer,
    table: reservReducer,
   
  },
   middleware:getDefaultMiddleware=>
      getDefaultMiddleware().concat(
        guardMidlleware
      )
});

