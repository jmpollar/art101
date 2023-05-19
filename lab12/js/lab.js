// index.js - Use jQuery/JS and conditionals to assign a harry potter house based on input name
// Author: James Pollard
// Date: 5/18/23

//create function sortingHat() to take a string as an argument and uses mod to assign harry potter house based on length%4 and returns a string based on that, all run through a click event listener on a button
//harry potter font from https://www.fontspace.com/harry-potter-font-f3199
function sortingHat(str)
{
  //cast input to string
  inp = String(str); //returns undefined
  console.log("str"+str);
  var strLength = inp.length;
  console.log(strLength);
  var moddy = strLength%4;
  console.log("MODDY:"+moddy);

  /*if(moddy === 0)
  {
    return "Gryffindor: House 0";
  }
  else if(moddy === 1)
  {
    return "Ravenclaw: House 1";
  }
  else if(moddy === 2)
  {
    return "Slytherin: House 2";
  }
  else if(moddy === 3)
  {
    return "Hufflepuff: House 3";
  }*/
  //refactored code
  houseArr = ["Gryffindor: House 0", "Ravenclaw: House 1", "Slytherin: House 2", "Hufflepuff: House 3"];
  return houseArr[moddy]; //%=0 is index 0, %=1 is index 1, (...)
}

//create event listener attached to #button that gets the value of #input and assigns it to var name;
//sends name as param to sortingHat
//appends new paragraph to output that displays this return value
//house colors ripped from qualitylogoproducts.com
$("#button").click(function() {
  var name = $("#input").val();
  console.log(name);
  var house = sortingHat(name);
  console.log(house);
  var str2Print = "<p id=sort-p>"+name+": The Sorting Hat has sorted you into " + house + ".</p>";
  $("#output").append(str2Print);
  if(house === "Gryffindor: House 0")
  {
    $("#hp-house-body").css("background-color", "#740001");
    $("#content").css("background-color", "#EEBA30")
  }
  else if(house === "Ravenclaw: House 1")
  {
    $("#hp-house-body").css("background-color", "#5D5D5D");
    $("#content").css("background-color", "#0E1A40");
  }
  else if(house === "Slytherin: House 2")
  {
    $("#hp-house-body").css("background-color", "#AAAAAA");
    $("#content").css("background-color", "#2A623D");
  }
  else if(house === "Hufflepuff: House 3")
  {
    $("#hp-house-body").css("background-color", "#60605C");
    $("#content").css("background-color", "#FFDB00");
  }
})