// immediately invoked function expression

// iife is need when we need to protect our function from globle scope polution
// it execute the function immediately
// we have learned in arror function () => () implicite return method to write the code
// we will use this do create the iife here we will use part after the => (code block)(execution parenthesis)
// ( code block can be a function or an arrow function)( execution parenthesis may have arguments passed)
// we use ; to end the context to write multiple iife

// normal function with functin call to execute it

function foo1(){
    console.log("database1 connected");
}
foo1();

// normal arrow function

const foo2 = () => (
    console.log("database2 connected")
)
foo2();

// ** iife
(()=>console.log("database3 connected"))();
((param1)=>console.log(`database4 connected on ${param1}`))("server1")  // multiple iife with argument values