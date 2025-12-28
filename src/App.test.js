import { fireEvent, render ,screen} from "@testing-library/react"
import { Tablelist } from "./tables/Tables"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { DashBoard } from "./dashBoard/dashBoard"

test('clear Button loads',()=>{
    render(
        <Provider store={store}>
    <Tablelist/>
    </Provider>
)

    const clear_Button=screen.getAllByText(/clear/)

    expect(clear_Button).toBeInTheDocument
})

test('imgs load',()=>{
     render(
        <Provider store={store}>
    <Tablelist/>
    </Provider>
)


    const tables=screen.getAllByRole('img')

    expect(tables).toBeInTheDocument

})
test('time reservation options load',()=>{
     render(
        <Provider store={store}>
    <Tablelist/>
    </Provider>
)


    const option=screen.getAllByRole('option')
    expect(option).toBeInTheDocument

})
//this shows that main parts of the ui loads fine
//the next step is to test that if reserved tables load in dashboard 
// with the right time 