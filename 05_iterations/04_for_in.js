// for in is a loop to iterate through objects
//this is a special loop for objects it also works on other datatypes
// we can not use for in loop to iterate over map
// we can not use for of loop to iterate over objects
// for of arrays, maps
// for in objects, arrays (for arrays, you need to use the key means the index value starting from 0, 1, 2..)
// learn in depth why we can not use for in for map and for of for objects?
/* 
Ans:
for...in iterates over enumerable properties of an object. 
The keys in a map are not enumerable properties (though a map, like all objects, can have enumerable properties). 
For one thing, they can be of any type, not just strings, as with JavaScript objects, which have historically stood in for maps.

for...of iterates over an iterable, which is how the Map yields up its keys/values for iteration.
*/

const myObj = {
    js :"Javascript",
    cpp:"c++",
    rb:"ruby",
    py:"python"
}

for (const key in myObj) {
    // console.log(key)
}

for (const key in myObj){
    // console.log(`${key}: ${myObj.key}`) // this syntaxt does not work
    // console.log(`${key}: ${myObj[key]}`)    // we have to use the box bracket
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);   // prints index
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}

// nothing happence as Map why?