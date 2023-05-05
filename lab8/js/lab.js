// index.js - Use JavaScript to explore Anonymous & Callback functions 
// Author: James Pollard
// Date: 5/4/2023

// Constants
//declare array
numArr = [0, 3, -6, -99, -81, -5, 95, 37, 34624312432, 84775, 20849, 2];

// Functions
//create a named function that will take a single parameter, do a calculation on it, and return the result
function ArrayExponentials(val) {
  //square the param
  var results = val * val;
  return (" " + results + " equals " + val + "^2");
}

//use map on array using the function as a callback to operate on all the numbers in the array
//assign it to a variable
squaredArray = numArr.map(ArrayExponentials);

//now use a new anonymous function as a callback with map to do some new operation on each of the numbes in your array
//assign variable for access
divByThreeTester = numArr.map(function (x) {
  var results = x % 3;
  if (results == 0) {
    //is divisible by 3
    return " " + x;
  }
  else {
    //say it isn't divisible by 3
    return (" Indivisible by 3")
  }
});

//additional function to check if the squared values are divisible by 3
numCuber = numArr.map(function (x) {
  var results = x*x*x;
  return " " + results;
});

//test!
console.log(numArr);
console.log(squaredArray);
console.log(divByThreeTester);


//add to index.html
var outputEl = document.getElementById("output"); 
mapResults = "<h3>Original Array:<br></h3>" + numArr + "<h3><br><br>Squared Array:<br></h3>" + squaredArray + "<h3><br><br>Cubed Array:<br></h3>" + numCuber + "<h3><br><br>Divisible-by-Three-Tester:<br></h3>" + divByThreeTester;
outputEl.innerHTML = mapResults; // put your results here