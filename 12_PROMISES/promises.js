const promiseOne = new Promise(function(resolve, reject){
    //Do an Async Task
    //DB calls, cryptography, network, linking

    setTimeout(function(){
        console.log('Async task is completed')
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "rohit", email:"rohithalsana08@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user); 
    console.log("Async Task 3");  
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error =true
        if(!error)
            resolve({username: "rohit", password: "123"})
        else    
            reject("Error")
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).catch((error)=>{
    console.log(error);
})