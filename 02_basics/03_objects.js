// objects

// singleton => Interview => It is an object created with help of contstructor
                        //=> It is one of its kind object
                        //=> It is not created by litral declaration as shown in this file
                        //  Object.create   // this is a way to create the singleton object

//  literals
const mySym = Symbol("key1")    // Interview => use symbol as object key and print it
const JsUser = {
    name: "Aleem",
    //mySym:  "This is symbol in object",   // this gives string as output
    [mySym]:  "This is symbol in object",
    "full name": "Aleem Shaikh",
    age: 18,
    location:"Ahmedabad",
    email: "aleem@gmail.com",
    isLogedin: false,
    lastLoggedIn: ["monday","satureday"],
    testFunc: function(){
        console.log("hi i am test function defined inside an object")
    }
}
console.log(JsUser.testFunc());
console.log(JsUser);

// access the object property
// use . dot operator
// use ["key"]
// special case property with space in it can only be accessed with ["key"]
// Also note property with space in key name must be defined between "string1 string2"

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// symbol in object
// console.log(typeof JsUser.mySym);       // string berfore adding box bracket, undefine after adding box bracket
                                        // When we print the object it also shows [Symbol(key1)]: 'This is symbol in object'

// changing values of object
JsUser.email = "aleem@chatgpt.com"
// console.log(JsUser.email);  // aleem@chatgpt.com

//  restrict any changes to object
// Object.freeze(JsUser);
JsUser.email = "aleem@microsoft.com" //aleem@chatgpt.com    reason: we have freeze the object for changes

// functions in the object
JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`);  // this to be discussed in future
}

// console.log(JsUser.greeting)        // returns function return back very usefull for future
console.log(JsUser.greeting())      // hello js user
console.log(JsUser.greetingTwo())      // hello js user Aleem

// please note we will access property of an object with dot . operation
//  But there are special cases as key value with space or symbol as key in both the cases we will access with []
//  In interview mostly it is asked