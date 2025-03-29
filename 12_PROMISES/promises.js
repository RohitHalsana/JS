const promiseOne = new Promise(function(resolve, reject){
    //Do an Async Task
    //DB calls, cryptography, network, linking

    setTimeout(function(){
        console.log('Async task 1 is completed')
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
            reject("Rejected : Error Came in task 4")
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error);
}).finally(() => console.log("The promise is either revolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error =false
        if(!error)
            resolve({status: "Resolved", username: "Faith", password: "123"})
        else    
            reject("Error")
    }, 1000)    
})
// async function try catch
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);   
    }
    catch(error){
        console.log(error);        
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
        
//         const data = await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log("Rejected", error);        
//     }
// } 

// getAllUsers()

fetch('https://api.github.com/users/rohithalsana')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);    
})
.catch((error)=>console.log("ERROR", error))
.finally(()=>{
    console.log("Resolved or rejected");    
})

// const requestUrl = 'https://api.github.com/users/sameermatoria'
// const xhr = new XMLHttpRequest();
// // console.log(xhr.readyState)
// xhr.open('GET', requestUrl);// it has to be called
// // console.log(xhr.readyState)
// xhr.onreadystatechange =  function(){
//     console.log(xhr.readyState)
//     if(xhr.readyState === 4){
//         let data = this.responseText;
//         console.log(data)
//         // console.log(typeof data)
//         // data = JSON.parse(this.responseText);
//         // console.log(typeof data)
//         // console.log(data.followers)
//         // console.log(data.following)
//     }
// }
// xhr.send()
// only run in browser not in node