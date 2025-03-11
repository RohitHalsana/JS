const myNums = [1,2,3]

// const myTotal =myNums.reduce(function(acc,currval){
//     console.log(acc,currval)
//     return acc+currval
// },0)

const myTotal =myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);

const shoppingCart = [{
    itemName :"js course",
    price : 999
},
{
    itemName :"DSA",
    price : 1999
},
{
    itemName :"Python",
    price : 2999
}]

price=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(price);

