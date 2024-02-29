// function foo(){
//     console.log("a");
//     console.log("l");
//     console.log("e");
//     console.log("e");
//     console.log("m");
// }

// foo  // this is a function reference it will be very useful in react
// foo()   // when we add () paranthesis with it the function will be executated

//below is function defination, the value in () paranthesis are called parameter.  Parameters help to pass value in arguments to function
function addTwoNumbers(number1, number2){
    // console.log(number1+number2);
}

//below is function call, value in () parenthesis are arguments.  It will be used by parameter to pass it to function.
//addTwoNumbers(4,3);

const result1 = addTwoNumbers(3,4);
// console.log(`result1: ${result1}`);   //result: undefined becouse we are not returning the value

function addtwoN (number1, number2){
    // console.log(number1+number2);
    return number1+ number2
}

const result2 = addtwoN(2,6)
// console.log(result2);   //8 becouse, now we are returning the value


// ***notes
// function has return, by default it returns nothing
// function has parameter, in future we will learn ... spread operator in parameters
// function has uniq task to perform
// foo is funtion reference, very helpful in react and events
// foo() is function call


// function loginUserMessage(userName ="nomad"){
//     return `${userName} has logged in`
// }


// console.log(loginUserMessage());    //undefined has logged in
// ***in above situation we have two option either use if else or provide default argument

// ***default arg 
// function loginUserMessage(userName ="nomad"){
//     return `${userName} has logged in`
// }

// console.log(loginUserMessage('Aleem'));
// console.log(loginUserMessage(''));   // has logged in

// ***if else else
function loginUserMessage(userName){ 
    if(!userName){          //(userName === undefined) both the staments are equal
                            // in productin mostly programer writes false case in (!false)
    return `Please enter user name`
    }
    return `${userName} has logged in`
}
console.log(loginUserMessage());   // has logged in

//end of function video 20

// **rest operator

function sumCartValue(number1){
    return number1
}

// console.log(sumCartValue(20))   //20
// console.log(sumCartValue(20,40))   //20 now 40 will not be displayed as we dont have any way to handle additional argument in function defenition parameters

function sumAllCartValue(...sum){
    return sum
}

// console.log(sumAllCartValue(20,40))   //[20, 40]


// ** passing objects to function

const cartItem1 = {
    courseName: "JavaScript",
    price: 1999
}
const cartItem2 = {
    courseName: "Python",
    price: 2999
}

// same example as above remove ... rest operator you have single object function, add ... rest operator you have array of object
// you loop to go for as may array objects you want
function handleObject(...anyObject){
    let buff = `object couseName: ${anyObject[0].courseName} and price ${anyObject[0].price}\n`
    buff += `object couseName: ${anyObject[1].courseName} and price ${anyObject[1].price}`
    return `${buff}`
}

console.log(handleObject(cartItem1, cartItem2))

// ** passing array to function

const myArr1 = [100,200,400,500]
const myArr2 = [1000,2000,4000,5000]

//remove ... rest operator to handle single array, add to handle multiple array you add loop to go for as many arrays you want
function handleArr(...anyArr){
    return `${anyArr[0]}\n${anyArr[1]}`
}

console.log(handleArr(myArr1, myArr2));