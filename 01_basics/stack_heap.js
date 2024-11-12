// =====================================================================

// stack memory(Primitive), heap memory(Non-Primitive)

let myname = "rohit" //primitive
let aname = myname;

console.log(aname);

aname="ronny";

console.log(aname,myname);//value of myname doesn't change therefore uses stack, uses copy of value

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

console.log(userTwo);

userTwo.email="rohit@gmail.com";

console.log(userTwo, userOne);/*Uses heap,i.e uses reference of the same value in
 heap which cause change in the original value */
 



