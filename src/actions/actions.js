
import { LoadProducts, ThemeToggle,LoadTables,Reserve_table, Select_time } from "../action-types/action-types"


export const loadProducts=(arr)=>({
    type:LoadProducts,
    payload:arr
})

export const toggleTheme=(theme)=>({
    type:ThemeToggle,
    payload:theme,
})
export const loadTables=(tabels)=>({
    type:LoadTables,
    payload:tabels,
})
export const reserve_table=(tables)=>({
    type:Reserve_table,
    payload:tables
})
export const select_time=(time)=>({
    type:Select_time,
    payload:time
})