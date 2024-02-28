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

// console.log(tinderUsr);
// console.log(tinderUsr.userFullname);
// console.log(tinderUsr.userFullname.names);
// console.log(tinderUsr.userFullname.names.firstname);
console.log(tinderUsr.userFullname.names.secondname);
console.log(tinderUsr.userFullname?.names.secondname);  // Note that '?' it not give error if the property is not there.
                                                        // Sometimes in API response we dont know if the property is there or not.  Use '?'.


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
    },
    {
        id:1,
        email:"a@a.com"
    }
]

//pending video 12:55 https://youtu.be/4lb2pXWWXJI?feature=shared

// console.log(users[0].email);    // now when data come from database as in array of object we can use . operator
//                                 // we can also use map or filter mathod to get the desired data
// console.log(tinderUsr);
// console.log(Object.keys(tinderUsr));    // ** very improtoant **  we get all the keys in an array, very usefull with database and projects
// console.log(Object.values(tinderUsr));
// console.log(Object.entries(tinderUsr)); // converts and object to array of array for each key value pair.  Note if there is and object withing the object it wont be able to covert it


// many times we loop an object or array and that time if the value does not exist the entire program crashes
// solution is that use hasOwnProperty() method to check

// console.log(tinderUsr.hasOwnProperty("isLogedIn")); // true check the if the property is there or not




// ** Destructing objects and array

// object course
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Aleem"
}

// we access the property with . operator however we use other method too that is called destruction {key: optinal short form for key}

const {courseInstructor} = course
// console.log(courseInstructor); // Aleem => to avoide writing long name we can use another syntax

const {courseInstructor: instructor} = course;
// console.log(instructor);    // Aleem

// React example for destructor
// const navbar = (props.company) => { // to avoid writing long syntax
// const navbar = ({company}) => {     // we destructure it between {} curly braces

// }

// navbar(company = "Aleem")



// ** API JSON object
// keys and values are strings, every line ends with ',' comma and last line does not have ',' comma
// below is json example
// {
//     "name": "Aleem",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// how to study json object from api response?
    // take a api response and read it to json readors on web
    // many times we get api reponse in array of objects
    // famous api random user me https://randomuser.me/
    // take api response and paste it to json formator https://jsonformatter.org/
