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

//GLITCHY STUFF
var buttonElCursed = document.getElementById("glitch-button");

//change the button size for accessibility
buttonElCursed.style.height = "20px";
buttonElCursed.style.width = "20px";

//do different stuff based on how many times button has been clicked
var timesCursedButtonClicked = 0;

buttonElCursed.addEventListener('click', function() {
	
  timesCursedButtonClicked++;
  switch(timesCursedButtonClicked) {
    case 1:
      var h = window.innerHeight;
      var w = window.innerWidth;
      //make the button take up the entire page
      buttonElCursed.style.height = h + "px";
      buttonElCursed.style.width = w + "px";
      alert("I TOLD YOU NOT TO DO THAT!");
      break;

    case 2:
      //take away the input field
      var inputGet = document.getElementById("user-name");
      inputGet.remove();
      alert("FINE. I'M TAKING AWAY YOUR STUPID PROGRAM");
      break;

    case 3:
      //destroy everything on the page except the button
      var sectionEl = document.getElementById("main-section");
      sectionEl.remove();
      alert("ALRIGHT. TO GET YOUR INPUT BACK YOU GOTTA CLICK ME AGAIN! GOOD LUCK >:)");
      break;

    case 4:
    //SIKE
    //destroy links too
    var linksEl = document.getElementById("links");
    linksEl.remove();
    //recolor the body and set it all black
    bodyEl = document.getElementById("main-body");
    bodyEl.style.background = "black";
    var content = document.getElementById("content");
    content.style.backgroundColor = "black";
    alert("SIKE! YOU THOUGHT! Alright, one more time, just click me again, and I'll bring back a page");
    break;

    case 5:
      alert("Alright, just one more time. I promise.")
      break;

    case 6:
      var h = window.innerHeight;
      var w = window.innerWidth;
      buttonElCursed.remove();
      //pizza
      var bod = document.getElementById("main-body");
      var pizza = document.createElement("img");
      bod.appendChild(pizza);
      pizza.src = "./img/pizza.jpg";
      pizza.style.width = w;
      pizza.style.height = h;
      alert("pizza");
      break;


    default: //anything over 5, this
      alert("WHY ARE YOU STILL CLICKING ME");
      break;
  }
});
