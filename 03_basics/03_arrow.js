const user ={
    username:"aleem",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log("withing function this: ", this)
    }
}

// this referes to current context, in above case everything between {} is called this.


// console.log(user.welcomeMessage())
// user.username = "sam"
// console.log(user.welcomeMessage())
// user.welcomeMessage()
// let temp = {...this}
// console.log("outside function this: ", temp.toString());

// ** interview question: this holds window object in browser
// while it hold empty object in node enviroment


// ** Please note that this works within object but not inside a stand alone function
// check example below, when we try to print the this.username it give undefine.
// function chai(){
//     let username = "aleem"
//     console.log(this.username);
// }
// chai();

// const chai = function () {
//     let username = "aleem"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "aleem"
    console.log(this.username);
    console.log(this);
}
//chai()
// ** meaning this does not work in any type of function

// ** Arrow Function

const addTwo = (num1, num2) => {
    return num1+num2
}

console.log(addTwo(3,4))

// ** implecite return very useful in react **
const addTwo2 = (num1,num2)=> num1+num2

// or
const addTwo3 = (num1,num2)=> (num1+num2)   // very usefull in react
// if we write () then no return keyword needed
// if we write {} then return keyword needed

// ** how to return object
const addTwo4 = (num1,num2)=> ({username: "aleem"})   // very usefull in react

const myArr = [2,5,3,7,8]

// myArr.forEach(()=>())    // few example for function within the array method
// myArr.forEach(()=>{})