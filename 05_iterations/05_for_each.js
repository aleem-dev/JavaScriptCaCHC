const coding = ["js", "ruby", "java", "python","cpp"]

// normal function as callbackfn
coding.forEach( function (val) {
    // console.log(val);
})

// arrow function as callbackfn
coding.forEach((val)=>{
    // console.log(val)
})

// pass a function as a callbackfn

const printMe = (item) => {
    // console.log(item)
}

coding.forEach(printMe)

// for each on array of object
// * highly useful database output is always array of object or array of json
// use combination of loop foreach and for in

const myCoding =[
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "C",
        languageFileName: "c"
    }
]

myCoding.forEach( (respObj, index) => {
    // console.log(respObj)
    console.log(`object at index ${index}`)
    for (const key in respObj) {
        console.log(`${key}:- ${respObj[key]}`);
        }
})