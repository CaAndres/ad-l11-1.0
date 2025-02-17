const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('Multiplicación de dos números', () => {
    expect(calculator.multiply(2,3)).toBe(6)
})

test('Divide por  0 y me retorna null', () => {
    expect(calculator.divide(10, 0)).toBeNull();
  });
  

test('Dividicón de dos números', () => {
    expect(calculator.divide(9,3)).toBe(3)
})