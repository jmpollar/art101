// index.js - Use for loops to aid on condition checking using JavaScript&jQuery
// Author: James Pollard
// Date: 5/21/2023

//declare string to assign to innerHTML of output
var outputStr = "";

//mod-conditional checking function
function FizzBuzz(amt) {
  //apply numRange to the input
  var numRange = Number(amt) + 1;
  var str2Print = "";
  //boolean to check if any of these are a match
  var isAMatch = false;
  var maxSize = (12 + ((Number(amt) / 2) / 4));
  var maxHeight = 2.5625;
  for (let i = 1; i < numRange; i++) {
    //print each number
    console.log("<b>Number: " + i + "</b>");
    //append the number to the string
    outputStr += ("<tr id=i" + i + "><td width = 40%>Number: " + i + "</br></td>")

    //condition checking: %3, %5, %7
    if (i % 3 === 0) {
      //multiple of 3, print fizz
      str2Print += " <td width=20% id=3-" + i + "><b>Fizz!</b></td>";
      isAMatch = true;
    }
    if (i % 5 === 0) {
      //multiple of 5, print buzz
      str2Print += " <td width=20% id=5-" + i + "><b>Buzz!</b></td>";
      isAMatch = true;
    }
    if (i % 7 === 0) {
      //multiple of 7, print boom
      str2Print += " <td width=20% id=7-" + i + "><b>Boom!</b></td>";
      isAMatch = true;
    }
    if (isAMatch === false) //not a multiple of anything here
    {
      str2Print += "<td width=20% id=0-" + i + ">Nothin'</td>";
    }



    //print out the finished string
    console.log(str2Print);

    //append the string to the outputStr
    outputStr += (str2Print + "</tr>");

    //print the outputStr to output
    $("#output-table").append(outputStr);

    var r = 255 - i;
    var g = 255 - (i * 1.5);
    //increment the color, line Height, and font size if isAMatch = true


    if (isAMatch === true) {

      var colorV1 = "rgb(" + r + "," + g + "," + i + ")";
      if (i <= Number(amt) / 2) {
        var sizeV1 = (12 + (i / 4)) + "px";
        var lineHeight1 = (1 + ((i) / 128));
        var tdWidth = i * 4 + "%";
      }

      else if (i > Number(amt) / 2) {
        var sizeV1 = (maxSize - ((i) - Number(amt) / 2) / 4) + "px";
        var lineHeight1 = (maxHeight - ((Number(amt) / 2) / 128));
        var tdWidth = (i - (Number(amt) / 2)) * (2) + "%";
      }

      console.log(colorV1);
      $("#i" + i).css({ "color": colorV1, "font-size": sizeV1, "line-height": lineHeight1 });
      $("#3-" + i, "#5-" + i, "#7-" + i, "0-" + i).css("width", tdWidth);
    }
    else {

      var colorV2 = "rgb(" + r + "," + g + "," + i + ")";
      if (i <= Number(amt) / 2) {
        var sizeV2 = (12 + ((i - 1)) / 4) + "px";
        console.log(sizeV2);
        var lineHeight2 = (1 + ((i - 1) / 128))
      }

      else if (i > Number(amt) / 2) {
        var sizeV2 = (maxSize - (((i) - (Number(amt) / 2) - 1)) / 4) + "px";
        var lineHeight2 = (maxHeight - (((i) - (Number(amt) / 2) - 1)) / 128);
        var tdWidth2 = ((i * 4) - (Number(amt) / 2) - 1) + "%";
      }
      //same as before
      $("#i" + i).css({ "color": colorV2, "font-size": sizeV2, "line-height": lineHeight2 });
      $("#3-" + i, "#5-" + i, "#7-" + i, "0-" + i).css("width", tdWidth2);
    }

    //reset the string
    str2Print = "";

    //reset isAMatch
    isAMatch = false;

    outputStr = ""; //reset the outputStr


  }



}

//call the function on button click
$("#button").click(function () {
  var nums = $("#input").val();
  FizzBuzz(nums);
});
