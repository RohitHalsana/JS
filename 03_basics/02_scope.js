let a = 950
const b = 87
var c = 90
if (true) {
    let a = 50
    const b =8
    var c = 9
}

console.log(a);
console.log(b);
console.log(c);

console.log(add(6));
function add(sum) {
    return sum+1;
    
}
// console.log(addTwo(5)); //Cannot access 'addTwo' before initialization
const addTwo = function (sum) { // function as an expression
   return sum+2;    
}
console.log(addTwo(5));// this will work here only
// console.log(add(6));// this will work here and above also

