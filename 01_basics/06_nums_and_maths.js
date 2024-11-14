const score = 400
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(typeof balance);

console.log(typeof balance.toString());
console.log(balance);

console.log(balance.toFixed(1));

const otherNumber =123.8969

console.log(otherNumber.toPrecision(4));

const hundreds = 100000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++MATHS+++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(7.2));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random());// value b/w 0 and 1
console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max- min + 1))+ min)



