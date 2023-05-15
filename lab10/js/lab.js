// index.js - Use event listeners in Javascript to process and manipulate input; manipulate the DOM to display these new values
// Author: James Pollard
// Date: 5/15/23

//rip the nameSort function from lab 7

//declare usernamesort function to take username as param
function UserNameSort(uName) {
  //type checking: always needs to be a string
  if(typeof uName != "string")
  {
    console.log("converting to string...");
    String(uName);
  }
  //convert to array
  var userNameArr = uName.split('');
  //sort array
  userNameArr.sort();
  //put back to string
  var uName = userNameArr.join('');
  //return sorted username
  return uName;
}

//access the results div and assign to variable for manipulation
var divEl = document.getElementById("output");

//add an event listener to the button that:
//gets val of input field
//calls UNS function with input as a param
//assigns that return value to a variable
//replaces the html in <div id=output> with the results

var buttonEl = document.getElementById('my-button');
//change the button size for accessibility
buttonEl.style.height = "20px";
buttonEl.style.width = "20px";

buttonEl.addEventListener('click', function() {
	var inputGet = document.getElementById("user-name");
  var sortedInput = UserNameSort(inputGet.value);
  divEl.innerHTML = "<br>Original username: " + inputGet.value + "<br><br>Sorted username: " + sortedInput;
});