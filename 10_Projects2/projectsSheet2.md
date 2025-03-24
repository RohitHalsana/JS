# Project 5

```JS
const insertDiv = document.getElementById('insert');
insertDiv.innerHTML = '<h1>Welcome to Event KeyCodes</h1>';
insertDiv.style.color = 'lightblue';
insertDiv.style.backgroundColor = '#333';
document.addEventListener('keydown', function(event) {
  insertDiv.innerHTML = `
    <table>
      <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${event.key}</td>
        <td>${event.keyCode}</td>
        <td>${event.code}</td>
      </tr>
    </table>
  `;
});

```

# Project 6

```JS
// Generate a random colors
let isRunning = false;
let i
const randomColor = function(){
  const hex ="0123456789ABCDEF";
  let color = '#';
  for(let j=0; j < 6; j++)
  {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color
};
const change = function(){
  document.body.style.backgroundColor = randomColor()
}
document.querySelector('#start').addEventListener('click', function(){
    if (!isRunning){
      console.log('start')
      i = setInterval(change,1000);
      isRunning= true
    }
})
document.querySelector("#stop").addEventListener('click', function(){
  clearInterval(i)
  isRunning=false
})
```
