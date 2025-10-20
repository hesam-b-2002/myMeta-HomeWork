
import { LoadProducts, ThemeToggle,LoadTables } from "../action-types/action-types"


export const loadProducts=(arr)=>({
    type:LoadProducts,
    payload:arr
})

export const toggleTheme=(theme)=>({
    type:ThemeToggle,
    payload:theme,
})
//export const loadTables=(tabels)=>({
   // type:LoadTables,
   // payload:tabels,
//})