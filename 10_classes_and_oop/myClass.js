//ES6 introduced class syntext

class user {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const user1 = new user('alpha','alpha@a.com','123')
console.log(user1.encryptPassword())
console.log(user1.changeUsername())

// behind the scene, as javascript is prototype base everything can is done by function and prototype

function userfoo(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

userfoo.prototype.encryptPassword = function (){
    return `${this.password}abc`
}

userfoo.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const user2 = new userfoo('beta','beta@b.com','xyz')
console.log(user2.encryptPassword())
console.log(user2.changeUsername())

//hc code for referecne
// // ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// // behind the scene

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }


// const tea = new User("tea", "tea@gmail.com", "123")

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());