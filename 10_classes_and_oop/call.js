function createUserName (username){
    this.username = username
    // console.log(this)
    console.log('from createuserName: this.username: '+ this.username)
    return this.username
}

function createUser(username, email, password){
    // this.username = username
    //this.username=createUserName(username) //the code will work why need to investigate
    createUserName.call(this,username)
    this.email = email
    this.password = password
}

const user1 = new createUser('Alpha','alpha@a.com','123')
console.log(user1) 

//code from Hitesh
// function SetUsername(username){
//     //complex DB calls
//     this.username = username
//     console.log("called");
// }

// function createUser(username, email, password){
//     SetUsername.call(this, username)
   
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai);