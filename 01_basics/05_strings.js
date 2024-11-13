const name = "Rohit"
const repoCount = 50

console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName  = new String('Rohit')
console.log(gameName);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.substring(0,2));
console.log(gameName.slice(-2,5))//can use negative indices
console.log(gameName.trim())
console.log("hello ".replace(" ","-"))
console.log(gameName.includes('ro'));
console.log(gameName.split('o'))


