var buttonEl = document.getElementById('button-new');
buttonEl.innerHTML = "Hello World!";

var h1El = document.getElementById('h1-new');

h1El.appendChild(buttonEl);

buttonEl.addEventListener("click", function(){
    nombre = prompt("Enter your name: ");
    arr = ["red", "blue", "green"];
    rand = Math.floor(Math.random() * (arr.length +1));
    rand2 = Math.floor(Math.random() * (arr.length +1));
    document.body.style.backgroundColor = arr[rand];
    buttonEl.style.backgroundColor = arr[rand2];
    buttonEl.innerHTML = "Hello " + nombre + "!";
    arrBord = ["dotted ", "dashed ", "solid ", "double ", "groove ", "ridge ", "inset ", "outset "];
    rand3 = Math.floor(Math.random() * (arrBord.length +1));
    borderStr = "30px " + arrBord[rand3] + arr[rand2];
    console.log(borderStr);
    document.body.style.border = borderStr;
});


