import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "../reducers/item-reducer";
import { themeReducer } from "../reducers/themeReducer";
import { reservReducer } from "../reducers/reserve-reducer";
import {  Select_time } from "../action-types/action-types";


const guardMiddleware = store => next => action => {
  const state = store.getState();
  if (action.type === Select_time) {
    const { table,time } = action.payload;
    const currentTable = state.table.find(t => t.id === table.id);

    if (!currentTable) return next(action); 

    if (currentTable.chosen_time.length > 0) {
      alert("Time is already selected for this table!");
      return; 
    }if(currentTable.unavailable_times.includes(time)){
      alert('this time is not available!')
      return;
    }
  }


  return next(action);
};



export const store = configureStore({
  reducer: {
    products: itemsReducer,
    theme: themeReducer,
    table: reservReducer,
   
  },
   middleware:getDefaultMiddleware=>
      getDefaultMiddleware().concat(
        guardMiddleware
      )
});

