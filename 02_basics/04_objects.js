// const tinderUser = new Object(); // non singleton Object
const tinderUser = {} //  singleton object

tinderUser.id = "123abc"
tinderUser.name = "Rohit"
tinderUser.isLoggedIn = false;
// { id: '123abc', name: 'Rohit', isLoggedIn: false }

console.log(tinderUser);

const regularName= {
    email: "some@gmail.com",
    fullname: {
        userfullname : {
            firstname: "Rohit",
            lastname: "Halsana"
        }
    }
}

console.log(regularName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj5 = {5:"a", 6:"b"}

const obj3 = { obj1, obj2}
console.log(obj3);
// const obj4= Object.assign(obj1, obj2, obj5)// target object is obj1 and and other obj are source
const obj6= Object.assign({},obj1, obj2, obj5)// target object is {} and and other obj are source
console.log(obj6);
console.log(obj1);

const obj8 = {...obj1,...obj2,...obj5} // Merging Objects with Spread
console.log(obj8)

const users= [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));// Array of Keys is returned
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogedIn')); // property present in the object or not


