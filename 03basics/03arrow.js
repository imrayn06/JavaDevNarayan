const user = {
    username: "Narayan",
    price: "999",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to Website`);
        console.log(this);

    }

}

// user.welcomeMessage()

// user.username = " SAM"
// user.welcomeMessage()


// console.log(this);

// function chai(){
//     let username = "narayan"
//     // console.log(this.username);// works in object but not for this keyword

// }
// chai()


// const chai = function(){
//     let username = "rayan"
//     console.log(this.username);
// }
const chai = () => {// arrow function
    let username = "rayan"
    console.log(this);
}
// chai()

// Arrow Function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit Return no curly braces and return and in one line

// const addTwo = (num1, num2) =>  num1 + num2 

// const addTwo = (num1, num2) =>  ( num1 + num2 )

const addTwo = (num1, num2) =>  ({username: "rayn"})

console.log(addTwo(6,9));

//loop

// const myArray = [2, 5, 7, 8] 
// myArray.forEach()