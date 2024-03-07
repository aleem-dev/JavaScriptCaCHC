// for of
// it helps to loop throught the Array, Map
// it does not helps to loop through objects as they are not iterable

const arr = [1,2,3,4,5,6]

for (const iterator of arr) {
    // console.log(iterator)
}

const greetings = "Hello World!"
for (const iterator of greetings) {
    if(iterator==" "){
        // console.log("_");
    }
    // console.log(iterator)
}

// Maps
// it holds uniq values
// it remembers the sequence of entry

const map = new Map()
map.set("In","India")
map.set("USA","United States of America")
map.set("Fr", "France")
map.set("In", "India")

// console.log(map);
// console.log(map.get("In"))

for (const iterator of map) {
    // console.log(iterator)
}

for (const [key] of map) {
    // console.log(key)
}
for (const [key , value] of map) {
    // console.log(`${key} :- ${value}`)
}

const myObj ={
    game1:  "Nfs",
    game2:  "Spiderman"
}

// for (const iterator of myObj) {
//     console.log(iterator);
// }