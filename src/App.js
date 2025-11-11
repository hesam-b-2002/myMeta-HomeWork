
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTheme } from "./actions/actions";

import{ProdudtsList} from './products/products'
import { Tablelist } from "./tables/Tables";

function App() {
  const pageTheme=useSelector(state=>state.theme.themeValue)

  
  const dispatch=useDispatch()
 
  
  return (
    <>
    <div style={{background:pageTheme==='light'?'white':'black',
      color:pageTheme==='light'?'black':'white'}}>
      <button onClick={()=>((dispatch(toggleTheme(pageTheme))))}>dark</button>
    <Tablelist/>
    <ProdudtsList/>
    </div>


    </>
  );
}

 
export default App;
