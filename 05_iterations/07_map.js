const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumns = myNumbers.map((num)=>num+10)
// console.log(newNumns);

// const newNumns = myNumbers.map((num)=>{return num+10})
// console.log(newNumns);

const newNumns = myNumbers
                .map((num)=>num+10)
                .map((num)=>num +2)
                .filter((num) => num>=20)
console.log(newNumns);

//chaining