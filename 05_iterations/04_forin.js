const myObject={
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby"
};

for (const key in myObject){
    console.log(myObject[key]);  
    console.log(key);
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// if (Object.hasOwnProprty.call(object,key)){
//     const element = object[key];
// }



// Testing for in working in loops
const pro = ["js","c++","java","python"]
for (const key in pro) {
        console.log(key);        
        console.log(pro[key]);
}

const map = new Map();
map.set("IN","India")
map.set("USA","United States of America");
map.set("UK","United Kindom")

console.log(map);

//map is not iterable so doesnt return anything
for (const key in map){
    console.log(key)
    console.log(kmap[key]);    
}


