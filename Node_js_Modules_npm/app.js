const validate = require('validator');
const Arithmetic = require('./Arithmetic.js');

const sum = Arithmetic(5, 10);
console.log(sum);

console.log(validate.isEmail('gloriya@gmail.com'));
console.log(validate.isURL('https://www.google.com'));