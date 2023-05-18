// index.js - Use jQuery/JS and conditionals to assign a harry potter house based on input name
// Author: James Pollard
// Date: 5/18/23

//create function sortingHat() to take a string as an argument and uses mod to assign harry potter house based on length%4 and returns a string based on that, all run through a click event listener on a button

function sortingHat(str)
{
  //cast input to string
  inp = String(str); //returns undefined
  console.log("str"+str);
  var strLength = inp.length;
  console.log(strLength);
  var moddy = strLength%4;
  console.log("MODDY:"+moddy);

  if(moddy%4 === 0)
  {
    return "Gryffindor: House 0";
  }
  else if(moddy%4 === 1)
  {
    return "Ravenclaw: House 1";
  }
  else if(moddy%4 === 2)
  {
    return "Slytherin: House 2";
  }
  else if(moddy%4 === 3)
  {
    return "Hufflepuff: House 3";
  }
}

//create event listener attached to #button that gets the value of #input and assigns it to var name;
//sends name as param to sortingHat
//appends new paragraph to output that displays this return value
$("#button").click(function() {
  var name = $("#input").val();
  console.log(name);
  var house = sortingHat(name);
  var str2Print = "<p id=sort-p>The Sorting Hat has sorted you into " + house + ".</p>";
  $("#output").append(str2Print);
})