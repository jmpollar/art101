// index.js - Use JavaScript to explore the use of functions and returning values from them
// Author: James Pollard
// Date: 5/03/2023

// Constants

// Functions

//function to get player username and sort it
function UserNameSort()
{
  //prompt player for username
  userName = window.prompt("-------------------------------------------\nENTER YOUR USERNAME");
  //convert to array
  userNameArr = userName.split('');
  //sort array
  userNameArr.sort();
  //put back to string
  userName = userNameArr.join('');
  //return sorted username
  return userName;
}
//assign to variable
sortedUsername = UserNameSort();
//validate code
console.log(sortedUsername);
//use document.writeln to output the sorted name
document.writeln("SORTED USERNAME: " + sortedUsername +".<br><br>");
