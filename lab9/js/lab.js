// index.js - Use JavaScript to manipulate the DOM of the index.html page
// Author: James Pollard
// Date: 5/10/2023

//find output div and assign to var outputEl
outputEl = document.getElementById('output');

//create new element with document.createElement("p") and assign it ot a variable new1El
new1El = document.createElement('p');

//change the html attribute of new1El to say something new by using setAttribute (working?)
new1El.id = "results-p";

//create another element and assign it to a variable new2El
new2El = document.createElement('h3');

//change the html attribute of new2El to say something else (working?)
new2El.id = "results-h3";

//append new1El and new2El to outputEl
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//TASK X: declare a new El to add to the top of outputEl
new3El = document.createElement('img');
//assign it to the pizza picture
new3El.src = "img/pizza.jpg";
//assign its id
new3El.id = "results-img";
//add to the top of outputEl
outputEl.prepend(new3El);

//change css attributes of at least 2 elements on the page
new1El.style.color = "orange";
new1El.style.fontSize = "x-large";
new1El.style.fontFamily = "Impact,sans-serif";
new1El.style.letterSpacing = "4px";
new1El.style.textAlign = "center";
new1El.style.paddingBottom = "10px";
new1El.innerHTML = "This is my new1El paragraph text!<br>This is a picture of a cheese pizza!";
new2El.style.color = "green";
new2El.style.fontSize = "xx-large";
new2El.innerHTML = "This is my new2El h3 text!<br>Cheesy! Saucy! Boy am I hungry!";
new2El.style.fontFamily = "Courier,serif";
new2El.style.textAlign = "center";
new3El.style.border = "30px ridge #fff";
new3El.style.maxWidth = "40%";