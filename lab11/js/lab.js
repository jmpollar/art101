// index.js - Use JavaScript/jQuery to create document elements and assign event listeners
// Author: James Pollard
// Date: 5/17/23

//create buttons to add to the challenge, problems, and results sections with jQuery
//color incr variables
var rIncr = 0;
var gIncr = 0;
var bIncr = 0;

//append a label for each section
$("#challenge").append("<label id=challenge-label-id for=challenge-label>CHALLENGE</label>");
$("#problems").append("<label id=problems-label-id for=problems-label>PROBLEMS</label>");
$("#results").append("<label id=results-label-id for=results-label>RESULTS</label>");

//append a button for each section using these labels
$("#challenge").append("<button id=challenge-button name=challenge-label></button>");
$("#problems").append("<button id=problems-button name=problems-label></button>");
$("#results").append("<button id=results-button name=results-label></button>");

//change label font and make the text bold
$("#challenge-label-id").css("font-weight", "bold");
$("#problems-label-id").css("font-weight", "bold");
$("#results-label-id").css("font-weight", "bold");
$("#challenge-label-id").css("font-family", "courier");
$("#problems-label-id").css("font-family", "courier");
$("#results-label-id").css("font-family", "courier");

//make the buttons bigger
$("#challenge-button").css({"height":"20px", "width":"20px"})
$("#problems-button").css({"height":"20px", "width":"20px"})
$("#results-button").css({"height":"20px", "width":"20px"})

//add click event to each button
$("#challenge-button").click(function() {
  if(rIncr < 255 && rIncr+40 >= 255)
  {
    rIncr = 255;
  }
  else if(rIncr<255 && rIncr+40 < 255)
  {
    rIncr+=40;
  }
 
  if(rIncr == 255)
  {
    console.log("true");
    $(".minor-section.special#challenge").css("background-color", "black");
    rIncr = 0;
  }
  var colorv = "rgb("+rIncr+",0,0)";
  var colorv2 = "rgb("+(295-rIncr)+","+"0"+","+rIncr+")";
  console.log(colorv + colorv2);
  //find the button's section and toggle the class "special"
  $("#challenge").toggleClass("special");
  $(".minor-section.special#challenge").css("background-color", colorv);
  $("#challenge-label-id").css("color", colorv2);
});

$("#problems-button").click(function() {
  if(gIncr < 255 && gIncr+40 >= 255)
  {
    gIncr = 255;
  }
  else if(gIncr<255 && gIncr+40 < 255)
  {
    gIncr+=40;
  }
 
  if(gIncr == 255)
  {
    console.log("true");
    $(".minor-section.special#problems").css("background-color", "black");
    gIncr=0;
  }
  var colorv = "rgb(0,"+gIncr+",0)";
  var colorv2 = "rgb("+gIncr+","+(255-gIncr)+","+gIncr+")";
  console.log(colorv);
  //find the button's section and toggle the class "special"
  $("#problems").toggleClass("special");
  $(".minor-section.special#problems").css("background-color", colorv);
  $("#problems-label-id").css("color", colorv2);
});

$("#results-button").click(function() {
  if(bIncr < 255 && bIncr+40 >= 255)
  {
    bIncr = 255;
  }
  else if(bIncr<255 && bIncr+40 < 255)
  {
    bIncr+=40;
  }
 
  if(bIncr == 255)
  {
    console.log("true");
    $(".minor-section.special#results").css("background-color", "black");
    bIncr=0;
  }
  var colorv = "rgb(0,0," +bIncr+")";
  var colorv2 = "rgb(" + bIncr+","+"0"+","+(295-bIncr)+")";
  console.log(colorv);
  //find the button's section and toggle the class "special"
  $("#results").toggleClass("special");
  //increment the background color and decrement the button label color
  $(".minor-section.special#results").css("background-color", colorv);
  $("#results-label-id").css("color", colorv2);
});




