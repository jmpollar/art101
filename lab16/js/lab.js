// index.js - Use AJAX and JSON to parse through URL data and print it to the page
// Author: James Pollard
// Date: 6/1/2023

// Using the core $.ajax() method
$.ajax({
  // The URL for the request (from the api docs)
  url: "https://xkcd.com/612/info.0.json",
  // The data to send (will be converted to a query string)
  data: {},
  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we expect back
  dataType : "json",
  // What do we do when the api call is successful
  //   all the action goes in here
  success: function(data) {
      // do stuff
      console.log(data);
      var datStr;
      //send the data to console and output HTML
      for(ind in data)
          {
            datStr+=String("</br>" + ind + ": " + data[ind])
          }
      $("#output-p").html("</br>" + datStr);
      $("#output").append("<img src =" + data.img + ">");
  },
  // What we do if the api call fails
  error: function (jqXHR, textStatus, errorThrown) { 
      // do stuff
      console.log("Error:", textStatus, errorThrown);
  }
})