import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "../reducers/item-reducer";
import { themeReducer } from "../reducers/themeReducer";
import { reservReducer } from "../reducers/reserve-reducer";
import { Finalize, Select_time } from "../action-types/action-types";


const guardMiddleware = store => next => action => {
  const state = store.getState();
  if (action.type === Select_time) {
    const { table } = action.payload;
    const currentTable = state.table.find(t => t.id === table.id);

    if (!currentTable) return next(action); 

    if (currentTable.chosen_time.length > 0) {
      alert("Time is already selected for this table!");
      return; 
    }
  }

 
  if (action.type === Finalize) {
    const { chosen_table, time } = action.payload;
    const currentTable = state.table.find(t => t.id === chosen_table.id);

    if (!currentTable) return next(action); 

    if (currentTable.unavailable_times.includes(time)) {
      alert("This time is already taken!");
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

