//Array
let myArr = [0,1,2,3,4,5]
console.log(myArr[0]);
console.log(myArr);

//Array Methods
// myArr.push(6);  // adds at the end of array  [0, 1, 2, 3, 4, 5, 6]
// myArr.push(7);   //[0, 1, 2, 3, 4, 5, 6, 7]
// myArr.pop() // removes from the end of array [0, 1, 2, 3, 4, 5]
// console.log(myArr);

// myArr.unshift(9);   // adds at the beginning of the array, shifting all the elements by 1 index value down, [9, 0, 1, 2, 3, 4, 5]
// myArr.shift();   // removes from the beginning of the array, shifting all the element by 1 index value up, [0, 1, 2, 3, 4, 5]
// console.log(myArr);

// console.log(myArr.includes(9)); // question to array that does it inclueds perticular value in parentheses, it returns true or false
// console.log(myArr.indexOf(9));   // question to array the value in parentheses at what index, if it does not exists it gives -1
// console.log(myArr.indexOf(3));   // give the index of the value in parentheses if it is there in array

// const newArr = myArr.join('|') // this create a string from array and saparate by provided saparator, by default it is comma
// console.log(typeof newArr);
// console.log(myArr);

// // interview question splice and slice -> slice gives a result between the range excluding top range, while splice creates a new array between the range, and original array also cut down. like pastry out of cake
//  // splice manupulate original array
// console.log(myArr.slice(1,3));
// console.log('after slice myArr : '+ myArr)
// let pastry = myArr.splice(1,3)
// console.log(pastry);
// console.log(typeof pastry);
// console.log('after splice myArr : '+ myArr)
