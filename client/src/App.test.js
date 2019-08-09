  import React from "react";
  import ReactDOM from "react-dom";
  import { render } from "@testing-library/react";
  import "@testing-library/react/cleanup-after-each";
  
  import App from "./App";
  
  describe("<App />", () => {

    it("renders without crashing using ReactDOM", () => {
      const div = document.createElement("div");
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    it("renders without crashing", () => {
      render(<App />);
    });
  
    it("renders User Form text", () => {
      const app = render(<App />);
  
      app.getByText(/User Form/i);
    });

  });


// Other expect matchers we could use:
//expect(element).toBeTruthy();
//expect(element).toBeVisible();