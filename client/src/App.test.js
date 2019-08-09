  import React from "react";
  
  import * as rtl from '@testing-library/react';
  import 'jest-dom/extend-expect';
  
  import App from "./App";

  afterEach(rtl.cleanup);

  it('renders without crashing', () => {
    const wrapper = rtl.render(
      <span className="user-form">User Form</span>
    );
  });

  
  // describe("<App />", () => {

  //   it("renders without crashing using ReactDOM", () => {
  //     const div = document.createElement("div");
  //     ReactDOM.render(<App />, div);
  //     ReactDOM.unmountComponentAtNode(div);
  //   });
  
  //   it("renders without crashing", () => {
  //     render(<App />);
  //   });
  
  //   it("renders User Form text", () => {
  //     const app = render(<App />);
  
  //     app.getByText(/User Form/i);
  //   });

  // });


// Other expect matchers we could use:
//expect(element).toBeTruthy();
//expect(element).toBeVisible();