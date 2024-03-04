function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("Y");
    console.log("N");
}

// sayMyName //reference

// sayMyName() //execution


// function addTwoNum(num1, num2){
//     console.log(num1 + num2);
// }


function addTwoNum(num1, num2){

    // let result = num1 + num2
    // return result
    
    return num1 + num2

}

const result = addTwoNum(3, 6)

// console.log(`Result: ${result}`);

function loginUserMessage(username = "Empty")  {
    // if(username === undefined){
    if(!username){
        console.log(`Please enter a username : `);
        return
    }
    return `${username}  just logged in`
}

// console.log(loginUserMessage("Rayn"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){ //Rest Operator "..."
    return num1
}

// console.log(calculateCartPrice(2, 700, 500, 800));

const user = {
    username: "Rayn",
    price: "199"
}

function handleObject(anyobject){
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: "800"
})

const myNewArray = [200, 100, 400, 300]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 500]));