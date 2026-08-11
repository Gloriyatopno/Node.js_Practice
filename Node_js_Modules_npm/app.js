const chalk = require('chalk');
const validate = require('validator');
const Arithmetic = require('./Arithmetic.js');

const sum = Arithmetic(5, 10);
console.log(sum);

console.log(validate.isEmail('gloriya@gmail.com'));
console.log(validate.isURL('https://www.google.com'));

const bluemsg = chalk.bold.inverse.blue('Hello, World!');
console.log(bluemsg);

console.log(chalk.red('Success!'));
