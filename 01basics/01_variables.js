const accountId = 2305
let accountEmail = "duttarayan3@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState; //undefined value

// accountId = 2 NOT Allowed

accountEmail = "Microsoft@jv.com"
accountPassword = "2334"
accountCity = "goa"

console.log(accountId);

/*
Prefer not to us "var"
Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])