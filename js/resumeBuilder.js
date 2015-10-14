$("#header").append("Ryan Hendrix");

var formattedName = HTMLheaderName.replace("%data%", name);

$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%",  role);

$("#header").prepend(formattedRole);

