// myModule.test.js

const myModule = require('./myModule');

describe('myModule', () => {
  describe('add', () => {
    test('should add two numbers correctly', () => {
      const result = myModule.add(2, 3);
      expect(result).toBe(5);
    });
  });

  describe('subtract', () => {
    test('should subtract two numbers correctly', () => {
      const result = myModule.subtract(5, 2);
      expect(result).toBe(3);
    });
  });
});
