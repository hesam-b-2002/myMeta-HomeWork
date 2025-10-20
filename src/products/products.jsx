
import { goods} from "./goods";
import { useDispatch, useSelector} from "react-redux";
import { useEffect} from "react";
import { loadProducts } from "../actions/actions";
import './products.css' 



export const ProdudtsList=()=>{
    const products=useSelector(state=>state.products)
    const dispatch=useDispatch()


    useEffect(()=>{
        dispatch(loadProducts(goods))

    },[dispatch]);

    return(
        <>
        <div className="prodducts">
            {products.map((product,index)=>
                (
                    <main className="boxContainer"><img src={product.src} className={`box-${index}`} key={index}/></main>
               ))}
        </div>
        </>
    )
}