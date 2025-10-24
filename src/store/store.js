import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "../reducers/item-reducer";
import { themeReducer } from "../reducers/themeReducer";
import { reservReducer } from "../reducers/reserve-reducer";
import { useDispatch } from "react-redux";
import { reserve_table } from "../actions/actions";


export const store=configureStore({
    reducer:{
        products:itemsReducer,
        theme:themeReducer,
        table:reservReducer,}
})


