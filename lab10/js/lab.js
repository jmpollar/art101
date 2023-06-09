// index.js - Use event listeners in Javascript to process and manipulate input; manipulate the DOM to display these new values
// Author: James Pollard
// Date: 5/15/23

//rip the nameSort function from lab 7

//declare usernamesort function to take username as param
function UserNameSort(uName) {
  //type checking: always needs to be a string
  if (typeof uName != "string") {
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

buttonEl.addEventListener('click', function () {
  var inputGet = document.getElementById("user-name");
  var sortedInput = UserNameSort(inputGet.value);
  divEl.innerHTML = "<br>Original username: " + inputGet.value + "<br><br>Sorted username: " + sortedInput;
});

//GLITCHY STUFF
var buttonElCursed = document.getElementById("glitch-button");

//background music
var elevatorMusic = document.createElement("audio");

//change the button size for accessibility
buttonElCursed.style.height = "20px";
buttonElCursed.style.width = "20px";

//do different stuff based on how many times button has been clicked
var timesCursedButtonClicked = 0;

buttonElCursed.addEventListener('click', function () {
  //increment
  timesCursedButtonClicked++;
  //different things every time
  switch (timesCursedButtonClicked) {
    case 1:
      var h = window.innerHeight;
      var w = window.innerWidth;
      //make the button take up the entire page
      buttonElCursed.style.height = h + "px";
      buttonElCursed.style.width = w + "px";
      alert("I TOLD YOU NOT TO DO THAT!");
      break;

    case 2:
      //take away the input field and regular button
      var inputGet = document.getElementById("user-name");
      inputGet.remove();
      buttonEl.remove();
      alert("FINE. I'M TAKING AWAY YOUR STUPID PROGRAM");
      break;

    case 3:
      //destroy almost everything on the page except the button
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
      //Airport Lounge by Kevin MacLeod 
      //https://www.chosic.com/download-audio/44169/
      //play the music
      elevatorMusic.src = "./audio/elevatorz.mp3";
      elevatorMusic.play();
      //hide the button
      buttonElCursed.hidden = true;
      //pizza
      var mainEl = document.getElementById("content");
      for (let i = 0; i < 10000; i++) {
        //create 10k instances of pizza and assign to pizza image; randomly assign
        //size;grayscale;hue;dropShadow;blur;invert;saturate;rotation
        var pizza = document.createElement("img");
        mainEl.appendChild(pizza);
        pizza.src = "./img/pizza.jpg";
        var rand1 = Math.floor(Math.random() * (151));
        var h = window.innerHeight / rand1;
        var w = window.innerWidth / rand1;
        pizza.style.width = w + "px";
        pizza.style.height = h + "px";
        var rand2 = Math.floor(Math.random() * (101));
        var grayStr = "grayscale(" + rand2 + "%)";
        console.log(grayStr);
        pizza.style.filter += grayStr;
        var rand3 = Math.floor(Math.random() * (361));
        var hueRotStr = "hue-rotate(" + rand3 + "deg)";
        pizza.style.filter += hueRotStr;
        var dropShadowStr = "drop-shadow(" + rand1 / 10 + "px " + rand2 / 10 + "px " + rand3 / 10 + "px " + "white";
        pizza.style.filter += dropShadowStr;
        var rand4 = Math.floor(Math.random() * (11));
        var rand5 = Math.floor(Math.random() * (101));
        var rand6 = Math.floor(Math.random() * (12));
        var blurStr = "blur(" + rand4 + "px)";
        var invertStr = "invert(" + rand5 + "%)";
        var saturateStr = "saturate(" + rand6 + ")";
        pizza.style.filter += blurStr;
        pizza.style.filter += invertStr;
        pizza.style.filter += saturateStr;

        var rand7 = Math.floor(Math.random() * (361));
        var rotateStr = "rotate(" + rand7 + "deg)";
        pizza.style.transform = rotateStr;
      }
      //access the label of the cursed button. Assign it and the cursed button as child of the main Element
      let cursedLabel = document.getElementById("cursed-label");
      mainEl.appendChild(cursedLabel);
      mainEl.appendChild(buttonElCursed);
      
      //put the size back to normal
      buttonElCursed.style.width = "20px";
      buttonElCursed.style.height = "20px";

      //show the button
      buttonElCursed.hidden = false;

      //give it space
      cursedLabel.style.marginLeft = "15px";
      cursedLabel.style.marginRight = "15px";
      cursedLabel.style.marginTop = "60px";

      //change the label of the cursed button, make it readable on black screen
      cursedLabel.innerHTML = "I LEARNED MY LESSON";
      cursedLabel.style.color = "white";

      alert("pizza");
      break;

    case 7:
      //reload the page and pause the music
      alert("thank you.");
      elevatorMusic.pause();

      location.reload();
      break;


    default: //anything over 5, this
      alert("WHY ARE YOU STILL CLICKING ME");
      break;
  }
});
