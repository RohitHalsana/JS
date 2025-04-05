// function multiply(num){
//     return num*5
// }

// multiply.power = 2

// console.log(multiply(6));
// console.log(multiply.power);
// console.log(multiply.prototype);

// function also works as object which has prtotype behaviour

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++; // jisne bhi call kia h uska value increase hoga
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`); // jisne bhi call kia    
}

const chai = new createUser("chai", 25)
//const chai = createUser("chai", 25
// chai.printMe()
//      ^
// TypeError: Cannot read properties of undefined (reading 'printMe')
//     at Object.<anonymous> (D:\JS\js\14_Prototype\object.js:28:6)
//     at Module._compile (node:internal/modules/cjs/loader:1469:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
//     at Module.load (node:internal/modules/cjs/loader:1288:32)   
//     at Module._load (node:internal/modules/cjs/loader:1104:12)  
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49
const tea = new createUser("tea", 250)
// significance of new keyword
chai.printMe()
// tea.printMe()
tea.increment()
tea.printMe()
// chai.increment







