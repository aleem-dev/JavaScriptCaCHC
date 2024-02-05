// reference url https://262.ecma-international.org/5.1/#sec-11.4.3

// There are two types of data types, premetive (value) and no premetive (reference)

// premetive : Number, String, Boolean, Symbol, null, undefined, BigInt

// console.log(typeof "aleem");    // string
// console.log(typeof 1);          // number
// console.log(typeof true);       // boolean
// console.log(typeof Symbol("abc"));  //symbol
// console.log(typeof null);       // object
// console.log(typeof undefined);  // undefined
// console.log(typeof BigInt(1));  // bigint


// non premetive (reference) : Array, Object, Function

let array = [1,2,3];
let obj = {
    name:"Aleem",
    age: 18
}
let func = function (){
    console.log("Hello World");
}

console.log(typeof array);  // object
console.log(typeof obj);    // object
console.log(typeof func);   // function