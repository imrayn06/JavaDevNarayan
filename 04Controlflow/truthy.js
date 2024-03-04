// const userEmail = "j@gmail.com"// assuming string is the true value
const userEmail = []// assuming string is the true value

if (userEmail) {
    console.log("Got Email");
} else {
    console.log("Dont have an email");
}

//truthy values which are not falsy
// "0", 'false', " ", [], {}, function(){}


//falsy Value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//++++++++++++++Checking Empty+++++++++++++++//

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Empty Object");
}


//Nulish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 


console.log(val1);

//Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")