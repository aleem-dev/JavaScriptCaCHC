// const tinderUser = new Object() //interview singlton onject
const tinderUsr ={}     //interview non singleton object
tinderUsr.email = "abc@gmail.com"
tinderUsr.isLogedIn = false

const fullname = {
    names:{
        firstname: "abc",
        secondname:"xyc"
    }
}

tinderUsr.userFullname = fullname

console.log(tinderUsr);
// console.log(tinderUsr.userFullname);
// console.log(tinderUsr.userFullname.names);
// console.log(tinderUsr.userFullname.names.firstname);
// console.log(tinderUsr.userFullname.names.secondname);


// combine object or merge object

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {1:"e",2:"f"}
const obj4 = {3:"g",4:"h"}

// const obj5 = obj1 + obj2    // output is [object Object][object Object]
// const obj5 = {obj1,obj2}    //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'c', '2': 'd' } }
const obj5 = Object.assign({}, obj1, obj2,obj3, obj4) // please note that if the object with duplicate key comes it takes key value pair of last object
// console.log(obj5);


// ... most of the time spred operator will be used
const obj6 = {...obj1,...obj2,...obj3,...obj4} // please note that if the object with duplicate key comes it takes key value pair of last object
// console.log(obj6);

// database output array of objects
const users = [
    {
        id:1,
        email:"a@a.com"
    },
    {
        id:1,
        email:"a@a.com"
    },
    {
        id:1,
        email:"a@a.com"
    }
    {
        id:1,
        email:"a@a.com"
    }
]

//pending video 12:55 https://youtu.be/4lb2pXWWXJI?feature=shared
