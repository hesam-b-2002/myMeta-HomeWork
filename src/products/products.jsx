import { goods} from "./goods";
import { useDispatch, useSelector} from "react-redux";
import { useEffect} from "react";
import { loadProducts } from "../actions/actions";



export const ProdudtsList=()=>{
    const products=useSelector(state=>state.products)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(loadProducts(goods))

    },[dispatch]);

    return(
        <div>
            {products.map((product)=>
                (<div key={product.id}>

                    <img src={product.src}/>

                </div>))}
        </div>
    )










}