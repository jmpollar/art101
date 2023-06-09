// index.js - Use JavaScript to explore the use of functions and returning values from them
// Author: James Pollard
// Date: 5/03/2023

// Constants

// Functions
//grab input then return 
//function to get player username and sort it
/* INITIAL CODE
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
document.writeln("SORTED USERNAME:\n" + sortedUsername +".<br><br>");
*/

//EXTRA CREDIT CODE
//get username outside of function
userName = window.prompt("-------------------------------------------\nENTER YOUR USERNAME");

//declare usernamesort function to take username as param
function UserNameSort(uName) {
  //convert to array
  var userNameArr = uName.split('');
  //sort array
  userNameArr.sort();
  //put back to string
  var uName = userNameArr.join('');
  //return sorted username
  return uName;
}
function UserNameSortRev(uName) {
  //convert to array
  var userNameArr = uName.split('');
  //sort array
  userNameArr.sort();
  userNameArr.reverse();
  //put back to string
  var uName = userNameArr.join('');
  //return sorted username
  return uName;
}
//assign to variables
sortedUsername = UserNameSort(userName);
sortedRevUsername = UserNameSortRev(userName);
//access username
function userNameGet() {
  return userName;
}

//access reverse username
function userNameRevGet() {
  return sortedRevUsername;
}
//validate code
console.log(sortedUsername);
//use document.writeln to output the sorted name
document.writeln("ORIGINAL USERNAME: " + userNameGet() + ".<br><br>");
document.writeln("REVERSE SORTED USERNAME: " + userNameRevGet() + ".<br><br>");
document.writeln("SORTED USERNAME: " + sortedUsername + ".<br><br>");
