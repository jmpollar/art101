// index.js - Use AJAX to get and output information from an API
// Author: James Pollard
// Date: 5/31/2023

//using the core $.ajax() method
function getStuff(){$.ajax({
  // The URL for the request (from the api docs)
  url:"https://api.weather.gov/points/36.9741,-122.0308",
  // Whether this is a POST or GET request
  type:"GET",
  // The data to send (will be converted to a query string)
  data:{},
})
//  All the action goes here
.done(function(data){
  var datStr;
  //send the data to console and output HTML
  for(ind in data.properties.relativeLocation)
      {
        datStr+=String("</br>" + ind + ": " + data[ind])
        for(ind2 in data.properties.relativeLocation[ind])
        {
          datStr+=String("</br>     "+ind2 + ": " + data.properties.relativeLocation[ind][ind2]); //one method
        }
          
      }
  console.log("Cat Fact!</br>" + datStr);
  $("#get-stuff").html("</br>" + datStr);
})
}
//call the function on button click
$("#activate").click(getStuff);


