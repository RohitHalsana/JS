//Dates

let mydate =new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toJSON());
console.log(mydate.toISOString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);
console.log(mydate.toLocaleTimeString());

/* output

Fri Nov 15 2024 10:03:44 GMT+0000 (Coordinated Universal Time)
2024-11-15T10:03:44.729Z
2024-11-15T10:03:44.729Z
11/15/2024
11/15/2024, 10:03:44 AM
object
10:03:44 AM

*/
let myCreatedDate = new Date(2024, 0, 23)
console.log(myCreatedDate.toDateString());

         
myCreatedDate =  new Date (2024, 0, 23, 5, 3); 
/* Using the new keyword with Date is necessary when you want to create a Date object 
that you can work with programmatically. Without it, calling Date() as a function behaves
differently—it returns a string representation of the current date and time instead of creating an object.*/
console.log(myCreatedDate.toLocaleString());

myCreatedDate = new Date("2024-01-14"); // month start from 1
console.log(myCreatedDate.toLocaleString());

myCreatedDate = new Date("01-14-2024"); // month start from 1
console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = new Date.now(); // Date.now() doesn't use the new keyword because it is a static method of the Date class. 
// This is a special case designed for convenience

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

// Important

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

// `${newDate.getDay()}` and the time

newDate = new Date(); // Create a new Date object
let formattedWeekday = newDate.toLocaleString('default', {
    weekday: "long",
});

console.log(formattedWeekday); // Logs the day of the week, e.g., "Wednesday"
console.log(newDate);          // Logs the full date object, e.g., "2024-11-15T10:35:40.000Z"

