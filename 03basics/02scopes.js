// var c = 300
let a = 300 // global scope

if (true){
    let a =10
    const b =20
    // console.log(`Inner : ${a}`); // block scope
    
}

// for(let i=0; i < Array.length; i++){
//     const element = Array[i];
// }


// console.log(`Outer : ${a}`);
// console.log(b);
// console.log(c);

function one(){//Nested Function
    const username = "rayn"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "rayn"
    if(username === "rayn"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);

}
// console.log(username);


// +++++++++++++++intresting+++++++++++++++//

// FUNCTION Decleration

console.log(addOne(5));

function addOne(num){
    return num +1
}

// addTwo(5)// cannot use before decleration

const addTwo = function(num){
    return num +2
}
addTwo(5)// Can be use after decleration
