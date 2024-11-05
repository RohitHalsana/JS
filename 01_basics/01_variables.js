const accountId = 144553
let accountEmail = "rohit@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed
accountEmail= "abc@gmail.com"
accountPassword = "211122"
accountCity = "Kolkata"
let accountState;

console.log(accountId);

/*
prefer not use var
because of problem with block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
