// let myName ="rohit      "

// console.log(myName.length);
// console.log(myName.trim().length);
// console.log(myName.trueLength);//method



// ========== Prototype to object ===========================

// let myHeros =["spiderman", "thor"]

// let heroPower ={
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`spidy power is ${this.spiderman}`);        
//     }
// }

// Object.prototype.rohit = function(){
//     console.log(`rohit is present in all objects`);
// }

// Array.prototype.heyRohit = function(){
//     console.log(`Hey Rohit`);
// }
// heroPower.rohit()
// myHeros.rohit()
// myHeros.heyRohit()

// heroPower.heyRohit()// no such object in prototype of object


// =========================== Inheritence ============================

// ============== Prototypal Inheritence =============

// const User ={
//     name: "Rohit",
//     email: "ex@gmail.com"
// }
// const Teacher = {
//     makeVideo: true
// }

// const TSupport ={
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment : 'Assignment',
//     fullTime: true,
//     __proto__: TSupport
// }

// Teacher.__proto__ = User

// // modern Syntax

// Object.setPrototypeOf(TSupport, Teacher)

//----------------------------------------------------------------------------


let name = "Rohit        "
String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);   
}

name.trueLength()
"ricky".trueLength()

