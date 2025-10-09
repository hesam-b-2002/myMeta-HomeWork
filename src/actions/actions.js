import { LoadProducts } from "../action-types/action-types"


export const loadProducts=(arr)=>({
    type:LoadProducts,
    payload:arr
})