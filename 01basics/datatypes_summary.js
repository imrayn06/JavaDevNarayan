// #Primitive datatypes

/** 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt. 
 */
//JavaScript is dynamically typed

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null;
let Email; // let Email = undefined

//Symbol
const id = Symbol('123')  // Both are unique not same
const anotherId = Symbol('123')// Both are unique not same see comparison

console.log(id);
console.log(anotherId);
console.log(id === anotherId);

const bigNumber = 34523454534653477756n

//Reference datatypes (Non Primitive)

/**
 *  Arrays, Objects, Functions
 */

//array
const heroes = ["spiderman", "naagraj", "juniorG"] 

//object
let myObj ={
    name: "Rayn",
    age: 27,
}

//function
//function() datatype is object function
const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof bigNumber); // datatype = bigint