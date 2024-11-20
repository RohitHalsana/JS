
// The nullish coalescing operator (??) is a feature introduced in JavaScript (ES2020) that provides 
// a way to handle null or undefined values more effectively.
// Behavior:
// It returns value1 if value1 is not null or undefined.
// Otherwise, it returns value2.
// Use Case:
// It is useful for providing default values while avoiding pitfalls of falsy values like 0, 
// false, or "" that can trigger the default when using ||.
let userAge = null;// undefined
let defaultAge = 18;

let age = userAge ?? defaultAge; // Result: 18
console.log(age);

let a = null ?? 1 ?? 2;
console.log(a);//1

//Terenary operator
// condition? true : false;

