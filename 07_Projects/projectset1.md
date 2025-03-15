# Projects related to DOM

## project Link
[click here ](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#solution code
## Project 1:
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
    body.style.backgroundColor=co;

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
  })
});
```

## Project 2:

```javascript
const form = document.querySelector('form')
console.log(form)

// form is submitted from two types : POST || GET
// stop the event from going to browser from prevent 
//  const height = parseInt(document.querySelector('#height').value)
// this usecase will give empty value as on loading page the script has already run

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results =document.querySelector('#results')

  if(height === "" || height<0 || isNaN(height)){
    results.innerHTML = `Please give a valid Height ${height}`;
  }
  else if(weight === "" || weight<0 || isNaN(weight)){
    results.innerHTML = `Please give a valid Weight ${weight}`;
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    
    if(bmi<18.6)
      st="Under Weight";
    else if(bmi<24.9)
      st="Normal Weight";
    else
      st="Overweight";

      results.innerHTML =`<span>${st} <br> Value is ${bmi}</span>`;
      results.style.color="RED"
    
  }
});
```


## Project 3:

```Javascript
// const clock=document.querySelector('#clock');
const clock = document.getElementById('clock');
// console.log(clock);

let date = new Date();
console.log(date.toLocaleTimeString());

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML =date.toLocaleTimeString();
}, 1000)
```

Project 4:

```JavaScript
  const form = document.querySelector('form')
const submit = document.querySelector('#subt')
const restart = document.querySelector('#restart')
let guess = document.querySelector('.guessField')

let x = Math.floor((Math.random()*100)+1);
let p=0;

submit.addEventListener('click', function(e){

  e.preventDefault()
  guess.focus();
  
  const guessValue=parseInt(guess.value);

  const pre = document.querySelector('.guesses')
  const rem = document.querySelector('.lastResult')
  const lorh = document.querySelector('.lowOrHi')
  const result = document.querySelector('.resultParas')
  let error = document.querySelector('.error')
  error.textContent =""
  

  //invalid no.
  if (isNaN(guessValue) || guessValue < 1 || guessValue > 100) {
    
    error.textContent = "Please enter a number between 1 and 100.";
    error.style.color = "red";
    guess.value=""
  }
  //right guess
  else if (x === guessValue){
    result.innerHTML = 'Right Answer🎉🎊';
    guess.disabled = true;
    submit.disabled = true;
    restart.style.visibility = 'visible';// restart button visible
  }
  // wrong guess 
  else{
    p+=1;
    pre.innerHTML += `${guessValue} , `
    rem.innerHTML =  `${10-p}` 
    if(x > guessValue)
      lorh.innerHTML= "Guess Higher";
    else
      lorh.innerHTML= "Guess Lower";
    if (p === 10) {
      result.innerHTML = `Game Over! The correct number was ${x}.`;
      guess.disabled = true;
      submit.disabled = true;
      restart.style.visibility = 'visible';// Show restart button  
    }
  }
  guess.value="";
  guess.focus();
});

// Restart Game Function
restart.addEventListener('click', function () {
  p = 0;
  x = Math.floor(Math.random() * 100) + 1;

  document.querySelector('.guesses').innerHTML = '';
  document.querySelector('.lastResult').innerHTML = '10';
  document.querySelector('.lowOrHi').innerHTML = '';
  document.querySelector('.resultParas').innerHTML = '';

  guess.value = '';
  guess.focus();

  guess.disabled = false;
  submit.disabled = false;  
  
  restart.style.visibility = 'hidden'; // Hide restart button
});

/*
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lorh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const remaining = document.querySelector('.lastResult'); // Assuming this is the correct class

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number between 1 and 100.');
  } else if (guess < 1) {
    alert('Please enter a number more than 1.');
  } else if (guess > 100) {
    alert('Please enter a number less than 100.');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. The random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Right Guess 🎊🎉`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Guess Higher`);
    userInput.focus();
  } else {
    displayMessage(`Guess Lower`);
    userInput.focus();
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lorh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<Button id="newGame">Start new Game</Button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
    userInput.focus()
  });
}
*/
```
