



var bio = {
	"name" : "Ryan Hendrix",
	"role" : "Web Developer",
	"contacts": {
		"mobile" : "xxx-xxx-xxxx",
		"email" : "ryanjhendrix@gmail.com",
		"github" : "rhx1138",
		"twitter" : "None",
		"location" : "San Rafael, CA",
	},
	"welcomeMessage": "lorem ipsoum dolor sit amet etc etc etc.",
	"skills" : ["programming", "teaching", "JS"],
	"bioPic": ""

	};

var education = {
	"schools": [
		{
			"name": "Monterey Institute of International Studies",
			"city": "Monterey, CA",
			"degree": "MA",
			"major": "International Policy Studies"
		},
		{
			"name": "Indiana State University",
			"city": "Indiana",
			"degree": "BS",
			"major": "Graphic Design"
		}
	]
}

var work = {};
work.position = "Industry Analyst";
work.employer = "Frost and Sullivan";
work.years = 3;

//
var education = {};
education["name"] = "Monterey Institute of International Studies";
education ["city"] = "Monterey, CA";

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContacts = HTMLheaderContacts.replace(%data%,bio.role);
var formattedWorkExperience; //HTML

$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#header") 

//HTML 
$("topContacts").append(bio.contacts);
$("#workExperience").append(bio.skill);

$("#main").append(work["position"]);
$("#main").append(education.name);


