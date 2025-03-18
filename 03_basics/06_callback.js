function greetUser(name,callback){
	console.log(`hello , ${name}!`);
	callback();
}

function displayMessage(){
	console.log(`Welcome to Node.js callbacks!`);
}

greetUser('Alice',displayMessage);

function processArrayAsync(numbers, callback){
    numbers.forEach((num, index)=>{
        setTimeout(()=>{
            callback(num,index);
        },10000);
    });
    console.log("Rohit")
}
function cb(num,index){

}
processArrayAsync(3, )