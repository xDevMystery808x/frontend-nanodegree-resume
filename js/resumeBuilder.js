//$("#main").append("Mimi");
//$("#main").prepend("Mimi");

//var email = "mia@udacity.com";
//var newEmail = email.replace("udacity", "gmail");

//comsole.log(email);
//console.log(newEmail);

//var awesomeThoughts = "My name is Mia and Im the Best!";

//var funThoughts = awesomeThoughts.replace ("Best", "Awesome");

//$("#main").append(funThoughts);
var name = "Mia Nunes";
var formattedName = HTMLheaderName.replace("%data%", name);

var roleName = "Coding Instructor";
var roleFormattedName = HTMLheaderRole.replace("%data%", roleName);

$("#header").append(formattedName);
$("#header").append(roleFormattedName);