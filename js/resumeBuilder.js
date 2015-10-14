
var bio = {
  "name" : "Ryan Hendrix",
  "role" : "Web Developer,",
    "mobile" : "xxx-xxx-xxxx",
    "email" : "ryanjhendrix@gmail.com",
    "github" : "rhx1138",
    "twitter" : "None",
    "location" : "San Rafael, CA",
  };


// $("#header").append("Ryan Hendrix");

var formattedName = HTMLheaderName.replace("%data%", bio.name);

console.log(formattedName);

$("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

console.log(formattedRole);

$("#header").append(formattedRole);

