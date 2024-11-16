// Singleton
// Object Literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Rohit",
    "full name": "Rohit Halsana",
    [mySym] : "mykey1",// Square bractes show symbol
    location: "Jaipur",
    email: "rohit@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(JsUser.email); // Accessing property using dot notation
console.log(JsUser["email"]); // Accessing property using bracket notation
console.log(JsUser["full name"]); // Accessing property with a space in the name

console.log(JsUser[mySym]);//square brackets show symbol

//////////////*******Changes***********/
JsUser.email = "rohit@outlook.com"
// Object.freeze(JsUser);  //no changes are aloowed if object is freezed
// JsUser.email = "ricky@gmail.com"

console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js User");
};

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
};

// Calling methods
JsUser.greeting();       // Logs: Hello Js User
JsUser.greetingTwo();    // Logs: Hello Js User, Rohit


