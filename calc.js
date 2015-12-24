/*
 * File         :   calc.js
 * Description  :   A calculator node command line interface app.
 * ------------------------------------------------------------------------------------------------ */
var argv = require('minimist')(process.argv.slice(2));

/**
 * Sum two numbers together
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function sum(num1, num2) {
  return num1 + num2;
}

/**
 * Subtracts one number from the other.
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function subtract(num1, num2) {
  return num1 - num2;
}

var num1 = argv._[0];
var operator = argv._[1];
var num2 = argv._[2];

if (isNaN(num1) || isNaN(num2)) {
  throw 'Arguments must be valid numbers';
}

if (['+', '-'].indexOf(operator) < 0) {
  throw 'Invalid operator';
}

var result;
switch(operator) {
  case '+':
    result = sum(num1, num2);
    break;
  case '-':
    result = subtract(num1, num2);
    break;
}

console.log(result);