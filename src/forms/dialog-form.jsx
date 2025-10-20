import { Formik } from "formik"
import { Form } from "formik"



export const DialogFrom =()=>{

      return(  <div>
            <h1> dialog from</h1>
            <Formik
            initialValues={{ocaasion:'',dateTime:'',guests:''}}
            
            
            
            >
                <Form>
                    <input type='checkbox' name="occasion"/>
                    <input type="text" name="dateTime"/>
                    <input type='number' name="guests"  />
                    <button></button>
                    </Form>
            </Formik>
        </div>
        )
    
}