// object litterals
// const user = {
//     username: "Rohit",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database");
//         console.log(`username : ${this.username}`);
//         console.log(this);
//         /*
//         this reffers to the current outer context
//         {
//         username: 'Rohit',
//         loginCount: 8,
//         signedIn: true,
//         getUserDetails: [Function: getUserDetails]
//         }
//         */    
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);
// returns {}

// =============== > constructor function < ============

// const promiseOne = new Promise()
// new keyword is constructor function -> allows creation of mulltiple instances from one object(to make a new context)
// username="hi"
function User(username, loginCount, isloggedIn)
{
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn= isloggedIn 

    // return this;
}

// console.log(username);
const userOne = new User("Rohit", 12, true)
console.log("user 1");
console.log(userOne.username);

const userTwo = new User("Ronny", 12, true)
console.log("user 1");
console.log(userOne.username);

const userThree = new User("James", 22, true)
console.log("user 1");
console.log(userOne.username);
console.log(userTwo.username);
console.log(userThree.username);


// without new it will behave as normal function has to use return to access
// use new and no need for return as it make new instance

