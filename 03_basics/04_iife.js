//Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})(); // IIFE   avoid global scope pollution // put ; to end the IIFE to start another IIFE

((name)=>{
    console.log(`DB CONNECTED ${name}`);
})("rohit");