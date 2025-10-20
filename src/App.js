import { NavElements } from "./navElements";
import { ProdudtsList } from "./products/products";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTheme } from "./actions/actions";
import { DialogFrom } from "./forms/dialog-form";
function App() {
  const pageTheme=useSelector(state=>state.theme.themeValue)
  const dispacth=useDispatch()
  return (
    <>
    
    
    <div style={{background:pageTheme==='light'?'white':'black',
      color:pageTheme==='light'?'black':'white'}}>
      <button onClick={()=>((dispacth(toggleTheme(pageTheme))))}>dark</button>
    <NavElements/>
    <ProdudtsList/>
    <DialogFrom/>
    </div>

    </>
  );
}
 
export default App;
