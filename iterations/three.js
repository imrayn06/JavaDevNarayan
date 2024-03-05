// for of

// ["", "", ""]
// [{}, {}, {}]


// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num); 
// }


// const greetings = "Hello World"
// for (const greet of greetings) {
//     // if(){}
//     console.log(`each char is ${greet}`);

// }

//  Maps

const map = new Map()
map.set('In', "India")
map.set('Jp', "Japan")
map.set('Cn', "China")
map.set('Cn', "China")

// console.log(map);

for (const [key, value] of map) { //array destructured
    console.log(key, `-`, value);    
}

const myObj = {//object is not iterated like this
    'game1': 'nfs',
    'game2': 'spiderman'

}

// for (const [key, value] of myObj) {
//     console.log(key, `- `, value);
    
// }

