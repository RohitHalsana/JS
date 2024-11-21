const userEmail = "rohit@gmail.com"
if(userEmail)
    console.log("Got user email"); // "xyz" => true
else
    console.log("Didn't got user email"); // "" => false
// falsy values
// false, 0, -0,  BigInt. 0n, "", null, undefined, NaN
// other than these are truthy values
// Truthy value
// "0", "false", "", [], (), function(){}

Email=[]
if(Email.length === 0){
    console.log("Empty");
}
user={}
if(Object.keys(user).length==0)
    console.log("Empty");

//Important
if(0==false && false=="" && 0=="")
    console.log(true);
    
//he || operator considers all falsy values (null, undefined, 0, false, "") t
// o fall back to the second operand.In contrast, ?? only considers null or undefined.
let count = 0;

// Using ||
console.log(count || 10); // Output: 10 (because 0 is falsy)

// Using ??
console.log(count ?? 10);