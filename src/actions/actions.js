
import { Finalize,LoadProducts, ThemeToggle,LoadTables,Reserve_table, Select_time, Clear } from "../action-types/action-types"


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
export const reserve_table=(tabels)=>({
    type:Reserve_table,
    payload:tabels
})
export const select_time = (tabels) =>({ 
    type: Select_time, 
    payload:tabels
})
export const finalize=(purchase)=>({
    type:Finalize,
    payload:purchase
}) 
export const clear=(table)=>({
    type:Clear,
    payload:table
})