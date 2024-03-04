// singleton

//object literals
// Object.create // contructor method


const mySym1 = Symbol("key1")
const mySym2 = Symbol("key2")


const jsUser = {
    name: "rayn",
    [mySym2]: "myKey2",
    mySym1: "myKey1",
    "full name : ": "Narayan Dutta",
    age: 23,
    location: "kolkata",
    email: "abc#=@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name : "]);
// console.log(jsUser.mySym1);
// console.log(jsUser[mySym2]);




jsUser.email = "narayan@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "narayandutta@gmail.com"// did not propagate
console.log(jsUser);


//functions

jsUser.greeting = function(){
    console.log("Hello Greetings");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Greetings, ${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
