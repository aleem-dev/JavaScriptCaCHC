const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));
// console.log(otherNumber.toFixed(2));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

// ++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++

// console.log(typeof Math.sqrt(Math.PI));
// console.log(Math.abs(-2));
// console.log(Math.round(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.ceil(4.2));
// console.log(Math.min(4,3,7,9));
// console.log(Math.max(4,3,7,9));

// console.log((Math.random()*10));
// console.log(Math.floor(Math.random()*10));
// console.log(Math.floor((Math.random()*10)+1));

const min = 1       // Interview Question
const max = 3       // Interview Question

const randomNumber = Math.floor(((Math.random()*(max-min+1)))+min)  // Interview Question give random number between range
const clipminRandomNum = Math.floor(((Math.random()*(max-min)))+min+1)  // Interview Question give random number between range clip min number
const clipmaxRandomNum = Math.floor(((Math.random()*(max-min)))+min)  // Interview Question give random number between range clip min number

console.log(`random number between min ${min} and max ${max} :   ${randomNumber}`)   // Interview Question
console.log(`clip min number ${min} :   ${clipminRandomNum}`);
console.log(`clip max number ${max} :   ${clipmaxRandomNum}`);
