  import React from "react";
  import ReactDOM from 'react-dom';
  // importing from react-testing-library
  import {render, fireEvent} from '@testing-library/react'
  //cleanup 
  import "@testing-library/react/cleanup-after-each";  
  //imports 
  import App from "./App";
  import GetData from './components/DataRetrieval'
  import FormikUserForm from './components/Form.js'
  
  describe("<App />", () => {

    it("renders without crashing using ReactDOM", () => {
      const div = document.createElement("div");
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    it("renders Form  without crashing", () => {
      
      render(<FormikUserForm />);
    });

    it('clicking button', () => {
      const form = render(<FormikUserForm />)
      const button = form.getByText(/submit/i)
      fireEvent.click(button)
    })
  
    // it("renders User Form text", () => {
    //   const app = render(<App />);
  
    //   app.getByText(/User Form/i);
    // });

  });


// Other expect matchers we could use:
//expect(element).toBeTruthy();
//expect(element).toBeVisible();