/*jshint -W100 */

function formattedObjects(HTMLhelper, objectString) {
	return HTMLhelper.replace("%data%", objectString);
}

var bio = {
    "name": "Alyssa Choate",
    "role": "Web Dev Student",
    "contacts": {
        "mobile": "xxx-250-0134",
        "email": "alyssa.arseneau@gmail.com",
        "github": "ajchoate",
        "location": "Torrance, CA"
    },
    "welcomeMessage": "Hello and Welcome!",
    "skills": ["Critical Thinking", "Problem Solving", "Microsoft Office", "French"],
    "biopic": "images/liprofile.png",
    "display": function() {
    	var formattedName = formattedObjects(HTMLheaderName, bio.name);
        var formattedRole = formattedObjects(HTMLheaderRole, bio.role);
        var formattedMobile = formattedObjects(HTMLmobile, bio.contacts.mobile);
        var formattedEmail = formattedObjects(HTMLemail, bio.contacts.email);
        var formattedGithub = formattedObjects(HTMLgithub, bio.contacts.github);
        var formattedLocation = formattedObjects(HTMLlocation, bio.contacts.location);
        var formattedWelcomeMsg = formattedObjects(HTMLwelcomeMsg, bio.welcomeMessage);
        var formattedBiopic = formattedObjects(HTMLbioPic, bio.biopic);

        var header = $("#header");
        header.prepend(formattedRole);
        header.prepend(formattedName);
        header.append(formattedWelcomeMsg);
        header.append(formattedBiopic);
        $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

        if (bio.skills.length > 0) {
            header.append(HTMLskillsStart);
            bio.skills.forEach(function(skill, index, array) {
                var formattedSkills = formattedObjects(HTMLskills, bio.skills[index]);
                $("#skills").append(formattedSkills);
            });
        }
    }
};

var work = {
    "jobs": [{
            "employer": "Ezer Williamson Law",
            "title": "Legal Assistant",
            "location": "Torrance, CA",
            "dates": "2017",
            "description": "Part-time legal assistant",
            "url": "http://www.ezerwilliamsonlaw.com/"
        },
        {
            "employer": "Reynolds and Reynolds",
            "title": "Vendor Relations Associate & Forms Programmer",
            "location": "Kettering, OH",
            "dates": "2015 - 2017",
            "description": "Performed sales analyses and gathered rates data; programmed documents to display on docuPAD software",
            "url": "http://www.reyrey.com/"
        },
        {
            "employer": "Wyndham Vacation Rentals",
            "title": "Accounts Payable Associate",
            "location": "Fort Walton Beach, FL",
            "dates": "2013 - 2015",
            "description": "Audited and entered payables invoices, processed and cut checks, and assisted in testing new software",
            "url": "https://www.wyndhamvacationrentals.com/"
        },
        {
            "employer": "Cleveland-Cliffs Inc",
            "title": "Accounts Payable Issue Resolution Associate",
            "location": "Cleveland, OH",
            "dates": "2011 - 2013",
            "description": "Processed invoices, as well as invoice research and problem solving; was the main point of contact and aid for various suppliers; occasional work with French language translation and training/assistance for Canadian site",
            "url": "http://www.clevelandcliffs.com/"
        },
        {
            "employer": "Education Nationale",
            "title": "English Language Teaching Assistant",
            "location": "Vénissieux, Rhône, FRANCE",
            "dates": "2010 - 2011",
            "description": "Led small groups of high school and technical school students in English language lessons",
            "url": "http://www.education.gouv.fr/"
        }
    ],
    "display": function() {
        for (var job = 0; job < work.jobs.length; job++) {
        	var currentJob = work.jobs[job];
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = formattedObjects(HTMLworkEmployer, currentJob.employer);
            formattedEmployer = formattedEmployer.replace("#", currentJob.url);
            var formattedTitle = formattedObjects(HTMLworkTitle, currentJob.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = formattedObjects(HTMLworkDates, currentJob.dates);
            var formattedLocation = formattedObjects(HTMLworkLocation, currentJob.location);
            var formattedDescription = formattedObjects(HTMLworkDescription, currentJob.description);
            
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

var education = {
    "schools": [{
            "name": "Western Michigan University",
            "location": "Kalamazoo, MI",
            "degree": "Bachelor of Science",
            "majors": ["Math", " French"],
            "dates": "2005 - 2009",
            "url": "http://www.wmich.edu"
        },
        {
            "name": "Westwood High School",
            "location": "Ishpeming, MI",
            "degree": "High School Diploma",
            "majors": ["General Education"],
            "dates": "2002 - 2005",
            "url": "https://nice.k12.mi.us/"
        }
    ],
    "onlineCourses": [{
        "title": "Front-End Web Development",
        "school": "Udacity",
        "dates": "In progress",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    "display": function() {
        $("#education").append(HTMLschoolStart);
        for (var school = 0; school < education.schools.length; school++) {
        	var currentSchool = education.schools[school];
            var formattedSchool = formattedObjects(HTMLschoolName, currentSchool.name);
            formattedSchool = formattedSchool.replace("#", currentSchool.url);
            var formattedDegree = formattedObjects(HTMLschoolDegree, currentSchool.degree);
            var formattedSchoolDegree = formattedSchool + formattedDegree;
            var formattedDates = formattedObjects(HTMLschoolDates, currentSchool.dates);
            var formattedLocation = formattedObjects(HTMLschoolLocation, currentSchool.location);
            var formattedMajor = formattedObjects(HTMLschoolMajor, currentSchool.majors);

            $(".education-entry:last").append(formattedSchoolDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedMajor);
        }
        $(".education-entry").append(HTMLonlineClasses);
        for (var online = 0; online < education.onlineCourses.length; online++) {
            var currentOnlineSchool = education.onlineCourses[online]; 
            var formattedOnlineTitle = formattedObjects(HTMLonlineTitle, currentOnlineSchool.title);
            formattedOnlineTitle = formattedOnlineTitle.replace("#", currentOnlineSchool.url);
            var formattedOnlineSchool = formattedObjects(HTMLonlineSchool, currentOnlineSchool.school);
            var formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
            var formattedOnlineDates = formattedObjects(HTMLonlineDates, currentOnlineSchool.dates);
            var formattedOnlineURL = formattedObjects(HTMLonlineURL, currentOnlineSchool.url);
            formattedOnlineURL = formattedOnlineURL.replace("#", currentOnlineSchool.url);
            
            $(".education-entry:last").append(formattedOnlineSchoolTitle);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
};

var projects = {
    "projects": [{
            "title": "Sample Project 1",
            "dates": "2017",
            "description": "Sample project description for project 1",
            "images": "http://placeholder.pics/svg/300"
        },
        {
            "title": "Sample Project 2",
            "dates": "2017",
            "description": "Sample project description for project 2",
            "images": "http://placeholder.pics/svg/300"
        }
    ],
    "display": function() {
        $("#projects").append(HTMLprojectStart);
        for (var proj = 0; proj < projects.projects.length; proj++) {
            var currentProjects = projects.projects[proj];
            var formattedProject = formattedObjects(HTMLprojectTitle, currentProjects.title);
            var formattedProjDate = formattedObjects(HTMLprojectDates, currentProjects.dates);
            var formattedProjDesc = formattedObjects(HTMLprojectDescription, currentProjects.description);
            var formattedProjImage = formattedObjects(HTMLprojectImage, currentProjects.images);
            
            $(".project-entry:last").append(formattedProject);
            $(".project-entry:last").append(formattedProjDate);
            $(".project-entry:last").append(formattedProjDesc);
            $(".project-entry:last").append(formattedProjImage);
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();

/*function inName() {
	var finalName = bio.name.split(" ");
	finalName = finalName[0].toLowerCase() + " " + finalName[1].toUpperCase();
	finalName = finalName.replace(finalName[0], finalName[0].toUpperCase());
	return finalName;
};

$("#main").append(internationalizeButton);*/

$("#mapDiv").append(googleMap);