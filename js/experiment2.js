var buttonEl = document.createElement('button');
buttonEl.innerHTML = "Hello World!";

var pEl = document.getElementById('pNew');

pEl.prepend(buttonEl);

buttonEl.addEventListener("click", function(){
    nombre = prompt("Enter your name: ");
    arr = ["red", "blue", "green"];
    rand = Math.floor(Math.random() * (arr.length +1));
    rand2 = Math.floor(Math.random() * (arr.length +1));
    document.body.style.backgroundColor = arr[rand];
    buttonEl.style.backgroundColor = arr[rand2];
    buttonEl.innerHTML = "Hello " + nombre + "!";
});


