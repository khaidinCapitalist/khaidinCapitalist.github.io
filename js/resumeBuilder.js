var bio = {
	"name" : "Khai Din",
	"role" : "Front End Web Developer",
	"contacts" : {
		"mobile" : "014-5170684", 
		"email" : "khairuddinothman@outlook.com",
		"github" : "khaidinCapitalist",
		"twitter" : "@kdwebsecommerce",
		"location" : "Malaysia - Kuala Lumpur"
	},
	"welcomeMessage" : "hi guys! im learning at udacity and excited to do more!",	
	"skills" : ["awesomenes", "programming", "teaching", "JQuery", "HTML", "CSS", "Responsive Site"
	],
	"bioPic" : "images/khai.jpg"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);



var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;

$("#topContacts").append(formattedContacts);
$("#footerContacts").append(formattedContacts);

var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedWelcome = formattedBioPic + formattedWelcomeMsg;

$("#header").append(formattedWelcome);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}	
}

var work = {
	"jobs": [
	{
		"employer" : "Top Guard Security",
		"title" : "Security Guard",
		"location" : "Kuantan",
		"dates" : 2014,
		"description" : "A security officer (or security guard) is a person who is paid to protect property, assets, or people. They are usually privately and formally employed civilian personnel. Security officers are generally uniformed and act to protect property by maintaining a high-visibility presence to deter illegal and inappropriate actions, observing (either directly, through patrols, or by watching alarm systems or video cameras) for signs of crime, fire or disorder; then taking action and reporting any incidents to their client and emergency services as appropriate.A security officer (or security guard) is a person who is paid to protect property, assets, or people. They are usually privately and formally employed civilian personnel. Security officers are generally uniformed and act to protect property by maintaining a high-visibility presence to deter illegal and inappropriate actions, observing (either directly, through patrols, or by watching alarm systems or video cameras) for signs of crime, fire or disorder; then taking action and reporting any incidents to their client and emergency services as appropriate."
	},
	{
		"employer" : "Diang Rendang SDN BHD",
		"title" : "Products/Stock Associates",
		"location" : "Selangor",
		"dates" : "2013-2014",
		"description" : "Products Associates are responsible for keeping stock organized and on store shelves. Products Associates generally work during off-peak shopping hours to execute pricing, re-organizing, and display set up. Our commitment to providing an excellent store atmosphere helps us deliver a great customer experience and sets us apart from our competition."
	}
	]
}

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedWorkLocation);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);

	
}

var projects = {
	"projects": [
	{
		"title" : "Project 1 : Building Online Portfolio",
		"description" : "I was provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
		"dates" : 2015,
		"images" : ["images/197x148.gif","images/197x148.gif","images/197x148.gif","images/197x148.gif"]
	},
	{
		"title" : "Project 2 : Building Online Interactive Resume",
		"description" : "i were give chance to demonstrate my mastery of the language's(Javascript) syntax through a series of challenges. Each multipart problem mimics a real-life challenge that front-end developers face. You'll be required to write clean code and to apply your knowledge of variables, objects, JSON, functions and control flow to successfully solve the challenges.",
		"dates" : 2015,
		"images" : ["images/197x148.gif","images/197x148.gif","images/197x148.gif","images/197x148.gif"]
	}
	]
}


for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);

	var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedprojectTitle);

	var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedprojectDates);

	var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedprojectDescription);

	if (projects.projects[project].images.length > 0) {
		for (image in projects.projects[project].images) {
			var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedprojectImage);
		}
	}		
}

var education = {
	"schools": [
	{
		"name" : "Universiti Putra Malaysia",
		"location" : "Serdang, Selangor",
		"foundation" : "Asasi Sains Pertanian",
		"major" : "Asasi Sains",
		"dates" : 2013,
		"url" : "http://www.upm.edu.my"
	},
	{
		"name" : "International Islamic University Malaysia",
		"location" : "Petaling Jaya, Selangor",
		"foundation" : "Information Technology",
		"major" : "Foundation of Information Technology",
		"dates" : "2013-2015",
		"url" : "http://www.iium.edu.my"
	}
	],

	"onlineCourses": [
	{
		"title": "Javascript Syntax",
		"school": "Udacity",
		"dates": 2015,
		"url": "http://www.udacity.com"
	},
	{
		"title": "Intro to JQuery",
		"school": "Udacity",
		"dates": 2015,
		"url": "http://www.udacity.com"
	}
	]
}

function displayEducation() {
	if (education.schools.length > 0) {
		$("#education").append(HTMLschoolStart);
		for (edu in education.schools) {
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name).replace("#", education.schools[edu].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].foundation);
			$(".education-entry:last").append(formattedSchoolName).append(formattedSchoolDegree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
			$(".education-entry:last").append(formattedSchoolDates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
			$(".education-entry:last").append(formattedSchoolLocation);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	}


	if (education.onlineCourses.length > 0) {
		$(".education-entry:last").append(HTMLonlineClasses);
		for (course in education.onlineCourses) {
	
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedOnlineTitle);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			$(".education-entry:last").append(formattedOnlineSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
}

displayEducation();

$(document).click(function(loc) { 
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);

 });

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);


$("#mapDiv").append(googleMap);