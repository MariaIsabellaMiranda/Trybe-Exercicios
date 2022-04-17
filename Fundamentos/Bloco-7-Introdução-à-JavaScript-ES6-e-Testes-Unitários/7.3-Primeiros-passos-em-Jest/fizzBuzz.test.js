const myFizzBuzz = require('./fizzBuzz');

it('verificaSeDivisivel', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
  expect(myFizzBuzz(6)).toBe('fizz');
  expect(myFizzBuzz(10)).toBe('buzz');
  expect(myFizzBuzz(8)).toBe(8);
  expect(myFizzBuzz('b')).toBe(false);
})