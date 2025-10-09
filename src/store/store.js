import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer} from "../reducers/item-reducer";


export const store=configureStore({
    reducer:{
        products:itemsReducer}
})

