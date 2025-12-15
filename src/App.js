import { BrowserRouter,Routes,Route,Link } from "react-router"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTheme } from "./actions/actions";
import { DashBoard } from "./dashBoard/dashBoard";
import{ProdudtsList} from './products/products'
import { Tablelist } from "./tables/Tables";
import { Finalize_reservation } from "./dashBoard/finilize";
function App() {
  const pageTheme=useSelector(state=>state.theme.themeValue)

  
  const dispatch=useDispatch()
 
  
  return (
    <>
    <div style={{background:pageTheme==='light'?'white':'black',
      color:pageTheme==='light'?'black':'white'}}>
      <button onClick={()=>((dispatch(toggleTheme(pageTheme))))}>dark</button>
    </div>
    <BrowserRouter>
        <Link to='/ProdudtsList'><h1>products</h1></Link>
        <Link to='/DashBoard'><h1>DashBoard</h1></Link>
        <Link to='/Tablelist'><h1>Tablelist</h1></Link>
        <Link to='/Finalize_reservation'><h1>Finalize reservation</h1></Link>
        <Link to='/App'>Home</Link>

        <Routes>
          <Route path="DashBoard" element={<DashBoard/>}/>
          <Route path="ProdudtsList" element={<ProdudtsList/>}/>
          <Route path="Tablelist" element={<Tablelist/>}/>
          <Route path="Finalize_reservation" element={<Finalize_reservation/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

 
export default App;
