const myModule = require('../src/mymodule');

describe('myModule', () => {
  test('should add two numbers correctly', () => {
    const result = myModule.add(2, 4);
    expect(result).toBe(6);
  });
});

