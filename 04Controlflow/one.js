//control flow or logic flow

//if

// if(true){
// //will execute
// }

// if(false){
// //will not execute
// }
const isUserLoggedIn = true
const temperature = 41

// if(temperature === 40){
//     console.log("less tahan 50");
// }else{
//     console.log("greater tahan 50");

// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`);

//shorthand notation

// const balance = 1000
// // if(balance > 500) console.log("test"); //implicit scope

// if(balance < 500){
//     console.log("less than");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allowed");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("Allowed Login");
}