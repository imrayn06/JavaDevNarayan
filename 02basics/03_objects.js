// const tinderUser = new Object() // singleton object
const tinderUser = {} //non sigleton object

tinderUser.id = "123abc"
tinderUser.name = "Same"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "sun@gmail.com",
    fullname:{
        userFullName: {
            firstName: "Rayn",
            lastName: "Dutta"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);
// console.log(regularUser.fullname?.userFullName.firstName);// if no full name

const obj1 = {1: "s", 2: "b"}
const obj2 = {3: "d", 4: "c"}
const obj4 = {5: "d", 6: "c"}


// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 ={...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@g.com"
    },
    {
        id: 2,
        email: "hg@g.com"
    },
    {
        id: 3,
        email: "j@g.com"
    },   
]

console.log(users[1].email);


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));


