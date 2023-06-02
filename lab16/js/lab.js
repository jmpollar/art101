// index.js - Use AJAX and JSON to parse through URL data and print it to the page
// Author: James Pollard
// Date: 6/1/2023

//max bounds
var max = 2001
//generate a random comic number
var comicNum = Math.floor(Math.random() * max);
//URL string
var urlStr = "https://xkcd.com/" + comicNum + "/info.0.json";
// Using the core $.ajax() method
$.ajax({
  // The URL for the request (from the api docs)
  url: urlStr,
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
    //display comic title and image
    $("#output").append("<h1 id=comic-title>" + data.title + "</h1>");
    $("#output").append("<img id = comic-img src = " + data.img + ">");
    $("#comic-img").attr("alt", data.alt);
    $("#comic-img").attr("title", data.title);
  },
  // What we do if the api call fails
  error: function (jqXHR, textStatus, errorThrown) {
    // do stuff
    console.log("Error:", textStatus, errorThrown);
  }
})

//event listener for the button to reload the comic
$("#comic-button").click(function () {
  //reset the html
  $("h1").remove();
  $("img").remove();
  $("#output-p").html("");

  //new random number
  comicNum = Math.floor(Math.random() * max);

  //set it to the URL
  urlStr = "https://xkcd.com/" + comicNum + "/info.0.json";

  //route it through AJAX again
  $.ajax({
    // The URL for the request (from the api docs)
    url: urlStr,
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
      //display comic title and image
      $("#output").append("<h1 id=comic-title>" + data.title + "</h1>");
      $("#output").append("<img id = comic-img src = " + data.img + ">");
      $("#comic-img").attr("alt", data.alt);
      $("#comic-img").attr("title", data.title);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
      // do stuff
      console.log("Error:", textStatus, errorThrown);
    }
  })
})