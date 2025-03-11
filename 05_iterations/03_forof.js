//for of

// ["", "", ""]
// [{}, {}, {}]

const greeting ="Hello World"
for( const greet of greeting){
    console.log(greet);
}
const map = new Map();
map.set("IN","India")
map.set("USA","United States of America");
map.set("UK","United Kindom")

console.log(map);

for (const[key,value] of map){
    console.log(key,value)
}

const myObject = {
    game1: "NFS",
    game2: "Spiderman"
}
// for (const[key,value] of myObject){
//     console.log(key,value);
// } this for of doesnt work for objects


for (const [key, value] of Object.entries(myObject)) {
    console.log(key, value);
}
