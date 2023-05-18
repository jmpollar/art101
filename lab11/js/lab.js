// index.js - Use JavaScript/jQuery to create document elements and assign event listeners
// Author: James Pollard
// Date: 5/17/23

//create buttons to add to the challenge, problems, and results sections with jQuery

//append a label for each section
$("#challenge").append("<label id=challenge-label-id for=challenge-label>CHALLENGE</label>");
$("#problems").append("<label id=problems-label-id for=problems-label>PROBLEMS</label>");
$("#results").append("<label id=results-label-id for=results-label>RESULTS</label>");

//append a button for each section using these labels
$("#challenge").append("<button id=challenge-button name=challenge-label></button>");
$("#problems").append("<button id=problems-button name=problems-label></button>");
$("#results").append("<button id=results-button name=results-label></button>");



