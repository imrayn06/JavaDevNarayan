//for loop



// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (i == 5) {
//         console.log("5 is best");
//     }
//     console.log(element);
// }

// for (let i = 1; i < 10; i++ ){
//     console.log(`Outer Loop : ${i}`);
//     for (let j = 1; j < 10; j++) {
//         // console.log(`Inner value : ${j} and Outer loop: ${i}`);

//         console.log(`${i} * ${j} = ${i*j}`);
        
//     }
// }

let myArr = ["flash", "superman", "spiderman"]
// console.log(myArr.length);

for (let i = 0; i <  myArr.length; i++){
    const element = myArr[i];

    // console.log(element);
}

// break and continue


// for (let i = 0; i <= 20; i++) {
//     console.log(`Value of i : ${i}`);
//     if ( i == 5 ) {
//         console.log(`detected 5`);
//         break
//     }
    
    
// }
for (let i = 0; i <= 20; i++) {
    
    if ( i == 5 ) {
        console.log(`detected 5`);
        continue
    }

    console.log(`value of i : ${i}`);
    
}