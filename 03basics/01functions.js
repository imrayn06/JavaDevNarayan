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
console.log(loginUserMessage());