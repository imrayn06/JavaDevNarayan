const name = "rayn"
const repoCount = 20
//Donot use
// console.log(name + " has " + repoCount + " repositories ");


// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Man-chest-er-United")

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));



const newString = gameName.substring(0, 8)
console.log(newString);

const anotherString = gameName.slice(-14, 4)
console.log(anotherString);

const newStringOne = "    Narayan    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.goo%33gle.com"
console.log(url.replace('%33', '-'));

console.log(url.includes('o'));
console.log(url.includes('1'));

console.log(gameName.split('-'));
