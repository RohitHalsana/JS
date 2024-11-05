let score = "33Nac"

console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof ValueInNumber)
console.log(valueInNumber)

/*
"33" => 33
"33abc"=> NAN 
true=> 1 ; false=> 0
*/

let isLoggedIn = "hi"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/* 1=> true;  0=> false
"" => false ; "hello" => true
*/

let someNumber = 33

let stringNumber =String (someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//*******************operations**********************

let value =3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello"
let str2 = "Rohit"

let str3 = str1+str2;

console.log (str3);

let str4=str1*str2;

console.log(str4);

console.log(1+2+"2");
console.log("1"+2+2)

console.log(+true)
console.log(+"");

let num1,num2,num3;
num1 = num2 = num3 = 2 + 2

gc=100
gc++;
console.log(gc);
++gc;
console.log(gc);