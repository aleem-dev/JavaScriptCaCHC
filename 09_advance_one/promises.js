// we will see how to create and consume promises

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 completed')
        resolve()
    },1000)
})
.then(function(){
    console.log('new promise2 consumed')
})

//create
const promiseThree = new Promise(function(resolve, reject){
    //pass object
    resolve({username: "alpha", email:"alpha@example.com"})
})
//consume
promiseThree.then(function(data){
    console.log(data)
})

//prmise with resolve, response, then, catch and finaly
//create
const promiseFour = new Promise(function(resolve, reject){
    const error = false;
    if(!error){
        resolve({username:"beta", email:"beta@example.com"})
    }else{
        reject('Error: Something went wrong')
    }
})

//consume
promiseFour
.then(function(user){
    console.log(user)
    return user.username
})
.then(function(username){
    console.log("username: "+username)
})
.catch(function(error){
    console.log('error: '+error)
})
.finally(function(){
    console.log("promise block complete")
})

// consume promise with async and await
//create
const promiseFive = new Promise(function(resolve, reject){
    const error = true //false to run if block
    if(!error){
        resolve({username:"theta", email:"theta@example.com"})
    }else{
        console.log("Error: something went wrong promise 5")
    }
})
//consume
async function  consumePromiseFive () {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

// use fetch along with try catch as fetch is also promise

// async function getAlluser () {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response) //this gives non parse data
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("promise 6: "+error)        
//     }
// }
// getAlluser()

//lets use fetch and .then, .catch for error handling
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log('promise 7: '+error))
.finally(()=>console.log('promise 7 completed'))