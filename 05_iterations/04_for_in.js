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

// nothing happence as Map is not iterable