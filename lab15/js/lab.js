// index.js - Use AJAX to get and output information from an API
// Author: James Pollard
// Date: 5/31/2023

//using the core $.ajax() method
function getStuff(){$.ajax({
  // The URL for the request (from the api docs)
  url:"https://catfact.ninja/fact",
  // Whether this is a POST or GET request
  type:"GET",
  // The data to send (will be converted to a query string)
  data:{},
})
//  All the action goes here
.done(function(data){
  //send the data to console and output HTML
  console.log("Cat Fact!</br>" + data.fact);
  $("#get-stuff").html("Cat Fact!</br>" + data.fact);
})
}
//call the function on button click
$("#activate").click(getStuff);


