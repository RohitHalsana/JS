
//for loop
let array =[5,5,5,56,4,3,5,]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}


for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // Exits the loop when i is 3
    }
    console.log(i); // Output: 0, 1, 2
}

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue; // Skip the iteration when i is 3
    }
    console.log(i); // Output: 0, 1, 2, 4
}

function findEven(num) {
    if (num % 2 === 0) {
        return "Even"; // Exit the function with a value
    }
    return "Odd";
}

console.log(findEven(4)); // Output: Even
console.log(findEven(5)); // Output: Odd

function checkPositive(num) {
    if (num < 0) {
        throw new Error("Number must be positive!"); // Throws an error
    }
    return num;
}
try {
    console.log(checkPositive(-5)); // This will throw an error
} catch (error) {
    console.log(error.message); // Output: Number must be positive!
}
