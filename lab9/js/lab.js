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
new2El = document.createElement('img');

//change the html attribute of new2El to say something else (working?)
new2El.id = "results-h3";

//append new1El and new2El to outputEl
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//change css attributes of at least 2 elements on the page
new1El.style.color = "blue";
new1El.innerHTML = "This is my new1El text!";
new2El.style.color = "red";
new2El.innerHTML = "This is my new2El text!";