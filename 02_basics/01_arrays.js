// array

const myArr = [0,1,2,3,4,5]; //Elements in array can be mixed datatypes [9,0,8,8, true,"hi"]
const myHeros = ["shaktiman",'Spiderman']
const arr2 = new Array(1,2,3,4)
console.log(myArr[0]);
myArr.push(6)
console.log(myArr);
myArr.pop()
myArr.unshift(9)
console.log(myArr);
myArr.shift();
console.log(myArr);
console.log(myArr.indexOf(9))//-1 not present in array

console.log(myArr.join());
console.log(typeof myArr);
console.log(typeof myArr.join());

//slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3)
const mn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);







