const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros) // it adds an array as an element at 3rd index possition to marvel_heros
// console.log(marvel_heros);  //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

let all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

marvel_heros.flat(Infinity);    // this will flat the entire array to single level
// console.log(marvel_heros.flat(Infinity));   //flat return an array, it does not modify the original array
// console.log(marvel_heros); 

const all_new_heros = [...marvel_heros,...dc_heros];
// console.log(all_new_heros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// console.log(another_arr.length);    //6
// console.table(another_arr);         //6
// ┌─────────┬───┬───┬──────────┬────────┐
// │ (index) │ 0 │ 1 │ 2        │ Values │
// ├─────────┼───┼───┼──────────┼────────┤
// │ 0       │   │   │          │ 1      │
// │ 1       │   │   │          │ 2      │
// │ 2       │   │   │          │ 3      │
// │ 3       │ 4 │ 5 │ 6        │        │
// │ 4       │   │   │          │ 7      │
// │ 5       │ 6 │ 7 │ [ 4, 5 ] │        │
// └─────────┴───┴───┴──────────┴────────┘

const real_another_arr = another_arr.flat(Infinity) // this will flat the the array to given range, in general we give infinity to achive flat without any issue

// console.log(real_another_arr.length); //    11
// console.log(real_another_arr); //   [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// console.log(Array.isArray("Aleem"));    //  false
// console.log(Array.from("Aleem"));    //  [ 'A', 'l', 'e', 'e', 'm' ]
// console.log(Array.from({name:"Aleem"}));    // !! * High IMPORTANCE * !! [] => empty array becouse we have not instructed which is key and which is value

let score1  =   100
let score2  =   200
let score3  =   300

// console.log(Array.of(score1,score2,score3));    // create an array out of three difference variable
//[ 100, 200, 300 ] 


// ** read more about Array.isArray, Array.from, and Array.of **
