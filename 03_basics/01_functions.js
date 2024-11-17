function sayMyName(){
    console.log("Rohit");
}
sayMyName()

function add(number1 , number2){ // (parameters)
    console.log(number1 + number2);
}

add(3,4);//(arguments)
add(3,null)
add(3,"5")

function mul(number1 , number2){ // (parameters)
    let re=(number1 * number2);
    return re
    console.log("Rohit");// unreachable code as no statement after return statement is executed
}

const result = mul(5,5)
console.log(result);

function msg(user){ //(user = "rohit") default value
    if(user===undefined){// (!user ) means undefined is false
        console.log("Enter a valid user name");
        return
}
    return `${user} just logged in`
}

console.log(msg("Rohit"));
console.log(msg());// undefined :undefined just logged in

function calculate(...num1) { // rest operate makes array or bundle of elements
    return num1    
}
console.log(calculate(40,50,60));

function calculate2(val1,val2, ...num1) { // rest operate makes array or bundle of elements
    return num1    
}
console.log(calculate2(40,50,60,70));

user={
    name:"rohit",
    age: 21
}

function handleObject(anyObject){
    console.log(`My name is ${anyObject.name} and age is ${anyObject.age}`);    
}

handleObject(user);

handleObject({
    name: "rohit",
    age:5
})

const arr = [50,60,7,4];
function sec(arr) {
    return arr[2-1]
}
console.log(sec(arr));
