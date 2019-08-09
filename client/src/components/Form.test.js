const help = require("./helpers")

// Describe - describes what you're testing will help keep the unit tests nice and organized (optional but recommended)
describe('form component', ()  => {

describe('sum function', () => {
// It - it will tell you whatever you're describing can do 
    it("can add two numbers", () => {
    const expectedOutput = 10;
    const actualOutput = help.sum(5, 5);
    // toBe looks for strict equality (pass test if =, fail if not)
    expect(actualOutput).toBe(expectedOutput);
})
});
});
