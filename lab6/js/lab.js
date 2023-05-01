// index.js - Use JavaScript to explore arrays and objects
// Author: James Pollard
// Date: 4/27/2023

// Constants

// Functions
//declare myTransport array
myTransport = ["car"];

currentYear = 2023;

//create an object for this primary transport
myMainRide = {
  year: 2022,
  make: "Honda",
  model: "Civic",
  color: "Blue",
  //internal function to determine age val
  age: function() {
    return currentYear - this.year;
  }
};

//print out my transports
document.writeln("I move with my " + myTransport + ".<br><br>");
//print out myMainRide
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre");
document.writeln("<pre>Age: ", myMainRide.age(), "</pre>");
