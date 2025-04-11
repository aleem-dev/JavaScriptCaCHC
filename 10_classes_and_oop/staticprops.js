class staticPropsDemo {
    constructor (username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    static uniqId = 'theUniqID as static variable/property'
    static stMethod (str) {
        return console.log(`this is a static method ${str}`)
    }
}

user = new staticPropsDemo('alpha','alpha@a.com','123')
console.log(staticPropsDemo.uniqId) //theUniqID as static variable/property
console.log(staticPropsDemo.stMethod('Beta'))   //theUniqID as static variable/property
console.log(user)   //staticPropsDemo {username: 'alpha',email: 'alpha@a.com',password: '123'}
console.log(user.email) //alpha@a.com
console.log(user.uniqId)    //undefined
console.log(user.stMethod('Beta')) //TypeError: user.stMethod is not a function

//hc code
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());