// Arrays


const myArray = [0, 2, 3, 1, 4, 5]
const myHeroes =["spiderman", "superman"]

const myArr2 = new Array(1, 2, 4, 3)

// console.log(myArray[1]);
// console.log(myArr2[2]);


///Array Methods

// myArray.push(6)
// myArray.push(7)
// console.log(myArray);


// myArray.pop()
// console.log(myArray);

// myArray.unshift(9)
// console.log(myArray);
// myArray.shift()

// console.log(myArray); // Can be used for todo


// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));


// const newArr = myArray.join()
// console.log(myArray);
// console.log(newArr); // myArray converted to string


// slice, splice

// console.log("A ", myArray);
// const myn1 = myArray.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArray);

// const myn2 = myArray.splice(1, 3)

// console.log("C", myArray);
// console.log(myn2);

const marvel_heroes = ["Thor", "IronMan", "SpiderMan"]
const dc_heroes = ["BatMan", "Flash", "SuperrMan"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);


// const all_NewHeroes = [...marvel_heroes, ...dc_heroes]
// // console.log(all_NewHeroes);

// const anotherArray = [1, 2, 3,[4, 5, [6, 7], 7]]

// const real_anotherArray = anotherArray.flat(Infinity)

// console.log(real_anotherArray);

console.log(Array.isArray("RaynDutta"));
console.log(Array.from("RaynDutta"));
console.log(Array.from({name : "Narayan"})); // gives empty array because cannot covert keys "name" to array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));