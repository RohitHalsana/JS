const myNums =[1,2,3,4,5,6,7,8]

const newNums = myNums.filter((num) => {
    return num>4
})

console.log(newNums);

const newNums2 = myNums.filter((num) => {
    num>4
})

console.log(newNums2);

const newNums3 = []

myNums.forEach((num)=>{

    if (num>4){
        newNums3.push(num)
    }
})
console.log(newNums3);

const books = [
    { title: "The Hobbit", genre: "Fantasy", publish: 1937 },
    { title: "1984", genre: "Dystopian", publish: 1949 },
    { title: "To Kill a Mockingbird", genre: "Fiction", publish: 1960 }
];

const userBooks = books.filter((bk) => bk.genre === "Fantasy")
console.log(userBooks);

const userBooks2 = books.filter((bk) => bk.publish >=1938)
console.log(userBooks2);

// const userBooks2 = books.filter((bk) =>{return bk.publish >=1938})
// console.log(userBooks2);