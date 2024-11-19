const user = {
    username: "rohit",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

user.welcomeMessage()
user.username ="Sam"
user.welcomeMessage()
console.log(this);

/* if we run 
console.log(this)
o/p
windows
*/

function chai() {
    let username = "rohit"
    console.log(this);//many values
    // console.log(this.username);//undefined not used in functions in JS    
}
chai()

const vai = function () {
    let username = "rohit"
    console.log(this);//many values
    // console.log(this.username);//undefined not used in functions in JS 
}
vai()
global.username = "rohit"; 
const bhai = () => {//Arroy Function
    // let username = "rohit"
    console.log(this);
    console.log(this.username);
}
bhai()
//this: {} (empty object, because Node.js uses a module wrapper).
// this.username: undefined (no username property exists on {}).

const atw = (n1,n2) =>{
    return n1 + n2  // explicit return
}

console.log(atw(3,4));// 7

const atwo = (n1,n2) =>  (n1 + n2 +2) // implicit return no return keyword used
console.log(atwo(3,4));// 7

const atwoi = (n1,n2) =>  ({username : "rohit"}) // wrap object in () brackets parenthesis
console.log(atwoi(3,4));// {username : 'rohit'}

