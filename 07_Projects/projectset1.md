# Projects related to DOM

## project Link
[click here ](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#solution code
## project1
 
``` javascript
 console.log("Rohit")
 const buttons = document.querySelectorAll('.button')
console.log(buttons)
const body = document.querySelector("body");

// buttons.forEach((bu)=>{
//   // console.log(bu)
//   bu.addEventListener('click',function(e){
//       console.log(e)
//       console.log(e.target)
//     })
// });
buttons.forEach(function(bu){
    // console.log(bu)
    bu.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)    
    const co =e.target.id;
    console.log(co);

    // switch(co){
    // case "grey":
    //   body.style.backgroundColor= "grey";
    //   break;
    // case "white":
    //   body.style.backgroundColor="white";
    //   break;
    // case "blue":
    //   body.style.backgroundColor="blue";
    //   break;
    // case "yellow":
    //   body.style.backgroundColor="yellow";
    //   break; 
    // default:
    //   console.log("No matching color");
    // }

    body.style.backgroundColor=co;
  })
});



```