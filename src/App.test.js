import { fireEvent, render ,screen, within} from "@testing-library/react"
import { Tablelist } from "./tables/Tables"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { tables } from "./tables/tables"

import userEvent from "@testing-library/user-event"
import { userEventApi } from "@testing-library/user-event/dist/cjs/setup/api.js"

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
test('time reservation options load', async () => {
  render(
    <Provider store={store}>
      <Tablelist />
    </Provider>
  );
    const cards=screen.getAllByRole('article')
      for(const card of  cards){
        const select=within(card).getByRole('combobox')
        await userEvent.selectOptions( select , '12')
        expect(
          within(card).getByText(/12 pm/i)
        ).toBeInTheDocument
        //this test if the time user choses appears on chosen time <p/> tag
      }
;})
//this shows that main parts of the ui loads fine
//the next step is to test that if reserved tables load in dashboard 
// with the right time 