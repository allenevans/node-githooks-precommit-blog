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

var num1 = argv._[0];
var num2 = argv._[1];

if (isNaN(num1) || isNaN(num2)) {
  throw 'Arguments must be valid numbers';
}

console.log(sum(num1, num2));