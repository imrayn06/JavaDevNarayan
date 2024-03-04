// // Dates

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());

// console.log(typeof myDate); //Object

// // let myCreateDate = new Date(2023, 0,23)
// let myCreateDate = new Date(2023, 0,23, 5, 3)
let myCreateDate = new Date("2023-01-05")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);


console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));