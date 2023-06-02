// index.js - Use AJAX and JSON to parse through URL data and print it to the page
// Author: James Pollard
// Date: 6/1/2023

//declare comicNum
var comicNum;
//function for comic loading
function getAndPutData(comicURL) {
  
  //reset the html
  $("h1").remove();
  $("img").remove();
  $("border").remove();
  $("#output-p").html("");

  //route it through AJAX again
  $.ajax({
    // The URL for the request (from the api docs)
    url: comicURL,
    // The data to send (will be converted to a query string)
    data: {},
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType: "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function (data) {
      // do stuff
      console.log(data);
      var datStr;
      //send the data to console and output HTML
      for (ind in data) {
        datStr += String("</br>" + ind + ": " + data[ind])
      }
      $("#output-p").html("</br>" + datStr);
      //display comic title and image with alt, title, and border
      //give the title some bordering too
      $("#output-comic").prepend("<img id = comic-img src = " + data.img + ">");
      $("#output-comic").prepend("<h1 id=comic-title>" + data.title + "</h1>");
      $("#comic-img").attr("alt", data.alt);
      $("#comic-img").attr("title", data.title);
      $("#comic-img").css("border", "30px ridge #fff");
      $("#output-comic").css("border", "10px groove #A682FF");
      //$("#comic-button").css("margin-left", ((window.innerWidth/2) - (270-135)) + "px");
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
      // do stuff
      console.log("Error:", textStatus, errorThrown);
    }
  })
}

//event listener for the button to reload the comic
$("#comic-button").click(function () {
  //max bounds
  var max = 2001
  //generate a random comic number
  comicNum = Math.floor(Math.random() * max);
  //URL string
  var urlStr = "https://xkcd.com/" + comicNum + "/info.0.json";
  getAndPutData(urlStr);
});

$("#previous-button").click(function () {
  //decrement comicNum
  comicNum--;
  //URL string
  var urlStr = "https://xkcd.com/" + comicNum + "/info.0.json";
  getAndPutData(urlStr);
});

$("#next-button").click(function () {
  //increment comicNum
  comicNum++;
  //URL string
  var urlStr = "https://xkcd.com/" + comicNum + "/info.0.json";
  getAndPutData(urlStr);
});

$("#submit-button").click(function () {
  //get the input value and assign to comicNum
  comicNum = $("#input").val();
  //URL string
  var urlStr = "https://xkcd.com/" + comicNum + "/info.0.json";
  getAndPutData(urlStr);
});