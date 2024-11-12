// Primitive
// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

// const score = 100
// const score :number =100;// typeScript

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// const userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 3632478672864787489172n



/*JavaScript is a dynamically typed language. 
This means that variables are not bound to specific data types and can hold values of 
any type at any time. Types are determined at runtime, 
allowing for flexibility but also making it easier to introduce type-related bugs.
ex:
let myVar = 5;    // myVar is initially a number
myVar = "Hello";  // now myVar is a string
However, with TypeScript, a superset of JavaScript, 
static typing can be added to JavaScript code to provide more structure 
and help catch type errors during development.
*/


// Reference(non -Primitive)

// Array, Objects, functions

const heros=["Shaktiman","Nagraj", "Doga"]
let myobj={
    name: "Rohit",
    age: 22,
}

const myfunction = function(){
    console.log("HELlo World")
}
console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof myfunction , myfunction)


