/*
 * Author: James Pollard <jmpollar@ucsc.edu>
 * Created: 25 Apr 2023
 * Purpose: Declare and print variables pertaining to the traits of my vehicle.
 */
// Constants

// Functions


//Define variables
var year = 2022;
var currentYear = 2023;
var make = "Honda";
var model = "Civic";
var color = "Blue";

// calculate age
function calcAge(yearG, currentYearG) {
  return currentYearG - yearG;
}

var age = calcAge(year, currentYear);

//output
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Age: " + age + " years<br>");

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
