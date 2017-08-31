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
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedWelcomeMsg);
        $("#header").append(formattedBiopic);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(skill, index, array) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[index]);
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
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
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
            var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedSchoolDegree = formattedSchool + formattedDegree;
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedSchoolDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedMajor);
        }
        $(".education-entry").append(HTMLonlineClasses);
        for (var online = 0; online < education.onlineCourses.length; online++) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title).replace("#", education.onlineCourses[online].url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
            var formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url).replace("#", education.onlineCourses[online].url);
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
            var formattedProject = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
            var formattedProjDate = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
            var formattedProjDesc = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
            var formattedProjImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images);
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