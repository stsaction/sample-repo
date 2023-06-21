const myModule = require('../src/myModule');

describe('myModule', () => {
  test('should add two numbers correctly', () => {
    const result = myModule.add(2, 3);
    expect(result).toBe(5);
  });
});
