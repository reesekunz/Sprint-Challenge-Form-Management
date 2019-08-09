const formtest = require("./Form");

// Describe - describes what you're testing will help keep the unit tests nice and organized (optional but recommended)
describe("form component", () => {

    // It - it will tell you whatever you're describing can do
    it("renders an element with the text Password", () => {
      const wrapper = rtl.render(<App />);
      const element = wrapper.queryByText(/password/i);
      expect(element).toBeInTheDocument();
    });

    it("should render a user form", () => {});

});

//Examples of other matchers you could use:

// expect(actualOutput).not.toBe(3);
// expect(actualOutput).toBeTruthy();
// expect(actualOutput).toBeDefined();
// expect(actualOutput).toBeGreaterThan(1);
