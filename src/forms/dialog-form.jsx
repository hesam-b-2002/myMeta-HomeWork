import { useFormik } from "formik"
import {reserve_table} from '../actions/actions'
import { useDispatch } from "react-redux"




export const DialogFrom =()=>{
    const dispatch=useDispatch()
    
    const formik = useFormik({
             initialValues:{
                ocaasion:''
                ,dateTime:''
                ,guests:''},
                onSubmit:values=>
                    dispatch(reserve_table(values))
    }) 

      return(  
      <div>
            <h1> dialog from</h1>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <select 
                    name="ocaasion"
                     id="ocaasion"
                     onChange={formik.handleChange}
                     value={formik.values.ocaasion}>
                        <option  value=""></option>
                        <option  id="birth-day" value="birth-day">birthday</option>
                        <option  id="party" value="party">party</option>
                        <option  id="just-hangong"  value="just-hangong">just handing</option>
                        </select>
                    <input 
                    type='datetime-local' 
                    name="dateTime" 
                    id ="dateTime" 
                    onChange={formik.handleChange}
                    value={formik.values.dateTime}/>
                    <input 
                    type='number'
                     name="guests"
                      id="guests" 
                      min={1} max={6}
                       placeholder='1'
                       value={formik.values.guests}
                       onChange={formik.handleChange}
                       />
                    <button 
                    type="submit">Submit
                    </button>
    </form>
            </div>
        </div>
        )
    
}