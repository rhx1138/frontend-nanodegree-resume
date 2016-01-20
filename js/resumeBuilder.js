var bio = {
	"name": "Ryan Hendrix",
	"role": "Web Developer",
	"contacts": {
		"mobile": "xxx-xxx-xxxx",
		"email": "ryanjhendrix@gmail.com",
		"github": "rhx1138",
		"twitter": "None",
		"location": "San Rafael, CA"
	},
	"welcomeMessage": "lorem ipsoum dolor sit amet etc etc etc.",
	"skills": ["programming", "teaching", "JS", "WebDev"],
	"bioPic": "images/fry.jpg"}

var work = {
"jobs": [
		{
			"employer": "Language Training Center",
			"title": "Project Manager",
			"dates": "January 2011 - Feburary",
			"description": "lorem epsem lorem epsemlorem epsem "
		}
	]
}
//
//var projects = {
//	"projects": [
//		{
//			"title": "Sample Project 1",
//			"dates": "2014",
//			"description": "lorem epsem lorem epsem",
//			"images":  //array with string urls
//
//		}
//	]
//}


//var education = {
//	"schools": [
//		{
//			"name": "Monterey Institute of International Studies",
//			"city": "Monterey, CA",
//			"degree": "MA",
//			"major": "International Policy Studies"
//		},
//		{
//			"name": "Indiana State University",
//			"city": "Indiana",
//			"degree": "BS",
//			"major": "Graphic Design"
//		}
//	],
//	"OnlineCourses": [
//		{
//			"title": "Front-End Web Developer Nanodegree",
//			"school": "Udacity",
//			"url": "http://www.udacity.com" //need to add correct
//		}
//	]
//}



var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWorkExperience; 
var formattedBioPic;

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").append(formattedName);
$("#header").append(formattedRole);

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkills);
}

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    
    $(".work-entry:last").append(formattedEmployerTitle);
    
}



$("#main").append(work["position"]);
$("#main").append(education.name);
$("#topContacts").append(bio.contacts);
$("#workExperience").append(bio.skill);


//HTML 



