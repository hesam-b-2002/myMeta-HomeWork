import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "../reducers/item-reducer";
import { themeReducer } from "../reducers/themeReducer";


export const store=configureStore({
    reducer:{
        products:itemsReducer,
        theme:themeReducer}
})

