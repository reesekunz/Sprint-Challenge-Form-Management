const help = require('./helpers');

describe('sum function', () => {
    it('sums two integers', () => {
      const expected = 3;
      const actual = help.sum(1, 2);
      expect(actual).toBe(expected); // .toBe() looks for strict equality!
    });
  }); 