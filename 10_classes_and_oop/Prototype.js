// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);  // this is a goal to create a trueLength method for all objects
//note: with help of prototype keyword we will add properties or method to any object.

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//adding aleem method to Object using prototype keyword
Object.prototype.aleem = function(){
    console.log(`aleem is present in all objects`);
}

//adding heyAleem method to Array using prototype keyword
Array.prototype.heyAleem = function(){
    console.log(`Aleem says hello`);
}

// heroPower.aleem()
// myHeros.aleem()
// myHeros.heyAleem()
// heroPower.heyAleem()

// inheritance
// to achieve inheritance we use __proto__ keyword it is different then prototype keyword
// or we use Object.setPrototypeOf(obj1, obj2) syntaxt

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
