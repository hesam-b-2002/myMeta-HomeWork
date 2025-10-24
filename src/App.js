import { NavElements } from "./navElements";
import { ProdudtsList } from "./products/products";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTheme } from "./actions/actions";
import { DialogFrom } from "./forms/dialog-form";
import { reserve_table } from "./actions/actions";

function App() {
  const pageTheme=useSelector(state=>state.theme.themeValue)
  const table_reservation=useSelector(state=>state.table)
  
  const dispatch=useDispatch()
   var table=[{ocassion:'birthday',date:12,guests:2}]
  
  return (
    <>
    <div style={{background:pageTheme==='light'?'white':'black',
      color:pageTheme==='light'?'black':'white'}}>
      <button onClick={()=>((dispatch(toggleTheme(pageTheme))))}>dark</button>
      <button onClick={()=>console.log( dispatch(reserve_table(table)))}>dispatch</button>
    <DialogFrom/>
    </div>


    </>
  );
}

 
export default App;
