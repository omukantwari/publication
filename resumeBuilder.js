var bio = {
    "name": "Olive Mukantwari",
    "role": "Web Developper",
    "contacts": {
        "mobile": "630-440-7796",
        "email": "omukantwari@gmail.com",
        "github": "omukantwari",
        "location": "Portland, Maine"
    },
    "welcomeMessage": "Welcome to this page, I am a hard working young lady dedicated to the satisfaction of customer.",
    "skills": ["Programming", "AD", "Windows", "JS"],
    "biopic": "images/me.jpg",

    display: function() {
        var data = '%data%';
        var web = '%url%';
        var formattedImg = HTMLbioPic.replace(data, bio.biopic);
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        var formattedName = HTMLheaderName.replace(data, bio.name);
        var formattedHTMLmobile = HTMLmobile.replace(data, bio.contacts.mobile);
        var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
        var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
        var formattedHTMLgithub = HTMLgithub.replace(data, bio.contacts.github).replace(web, bio.contacts.github);
        var formattedHTMLemail = HTMLemail.replace(data, bio.contacts.email).replace(web, "mailto:omukantwari@gmail.com");

        $("#header").prepend(formattedImg).prepend(formattedRole).prepend(formattedName);
        // $("#header").append(HTMLskillsStart);
        $("#header").append(formattedHTMLwelcomeMsg);
        //$("#contacts").append(formattedHTMLmobile, formattedHTMLemail, formattedHTMLgithub, formattedLocation);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            var formattedSkill = HTMLskills.replace(data, bio.skills[0]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace(data, bio.skills[1]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace(data, bio.skills[2]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace(data, bio.skills[3]);
            $("#skills").append(formattedSkill);

        }

        $("#contacts, #footerContacts").append(formattedHTMLmobile, formattedHTMLgithub, formattedHTMLemail, formattedLocation);
    }
};

bio.display();

var education = {
    "schools": [{
            "name": "National University of Rwanda",
            "location": "Huye Butare, Rwanda",
            "degree": "BA",
            "majors": ["appliedSci", "CompSci"],
            "dates": "2003-2008",
            "url": "ww.nur.rw"
        },

        {
            "name": "Groupe Scolaire Kabgayi",
            "location": "Muhanga Gitarama Rwanda",
            "degree": "HC",

            "majors": ["Math", "Physics", "french"],
            "dates": "2002",
            "url": "educaterwanda.org/listing/groupe-scolaire-st-joseph-kabgayi-2"
        }
    ],
    "onlineCourses": [{
            "title": "Front End Web Programming",
            "school": "Udacity",
            "dates": "2016",
            "url": "www.udacity.com"
        }, {
            "title": "Graduate",
            "school": "edx",
            "dates": "2016",
            "url": "www.edx.org"
        }

    ],

    display: function() {
        $("#education").append(HTMLschoolStart);

        education.schools.forEach(function(school) {
            var data = "%data%";
            var web = "%url%";
            var formattedHTMLschoolName = HTMLschoolName.replace(web, school.url).replace(data, school.name);
            var formattedHTMLschoolDegree = HTMLschoolDegree.replace(data, school.degree);
            var formattedHTMLschoolDates = HTMLschoolDates.replace(data, school.dates);
            var formattedHTMLschoolMajor = HTMLschoolMajor.replace(data, school.majors);
            var formattedHTMLschoolLocation = HTMLschoolLocation.replace(data, school.location);

            $(".education-entry:last").prepend(formattedHTMLschoolName + formattedHTMLschoolDegree, formattedHTMLschoolDates, formattedHTMLschoolMajor, formattedHTMLschoolLocation);

        });

        $(".education-entry:last").append(HTMLonlineClasses);
        for (var i = 0; i < education.onlineCourses.length; i++) {

            var data = "%data%";
            var formattedHTMLonlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[i].title);
            var formattedHTMLonlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[i].school);
            var formattedHTMLonlineDates = HTMLonlineDates.replace(data, education.onlineCourses[i].dates);
            var web = "%url%";
            var formattedHTMLonlineURL = HTMLonlineURL.replace(data, education.onlineCourses[i].url);
            $(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool, formattedHTMLonlineDates, formattedHTMLonlineURL);


        }
    }
};
education.display();

var work = {
    "jobs": [{
        "employer": "Artist & Craftsman",
        "title": "IT Help Desk Support",
        "dates": "2015 to Future",
        "location": "Portland, Maine, USA",
        "description": "troubleshoot, diagnose and resolve problems related to operating systems, hardware and software."
    }, {
        "employer": "Ministry of Trade and Industry",
        "title": "IT support",
        "dates": "2008 to 2012",
        "location": "Kigali, Rwanda",
        "description": "troubleshoot, diagnose and resolve problems related to operating systems, hardware and software"

    }],

    display: function() {

        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var data = "%data%";
            var web = "%url%";
            var formattedEmployer = HTMLworkEmployer.replace(data, job.employer).replace("%url%", job.url);
            var formattedTitle = HTMLworkTitle.replace(data, job.title);
            var fromattedEmplTitle = formattedEmployer + "  " + formattedTitle;
            var formattedDate = HTMLworkDates.replace(data, job.dates);
            var formattedLocation = HTMLworkLocation.replace(data, job.location);
            var formattedDescription = HTMLworkDescription.replace(data, job.description);
            $(".work-entry:last").append(fromattedEmplTitle, formattedDate, formattedLocation, formattedDescription);
        });
    }
};
work.display();

var projects = {
    "projects": [{
        "title": "IT Help Desk Support",
        "dates": "2016",
        "description": "Installing and set up network for Artist & Craftsman Store in Bridgeport Connecticut",
        "images": ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"]
    }, {
        "title": "On Site Support Technician",
        "dates": "2010-2011",
        "description": "Comesa Vsat Equipments installation",
        "images": ["images/img4.jpg", "images/img5.jpg", "images/img6.jpg"]
    }],

    display: function() {

        projects.projects.forEach(function(projects) {
            $("#projects").append(HTMLprojectStart);
            var data = "%data%";
            var web = "%url%";
            var formattedHTMLprojectTitle = HTMLprojectTitle.replace(data, projects.title);
            var formattedHTMLprojectDates = HTMLprojectDates.replace(data, projects.dates);
            var formattedHTMLprojectDescription = HTMLprojectDescription.replace(data, projects.description);
            $(".project-entry:last").append(formattedHTMLprojectTitle, formattedHTMLprojectDates, formattedHTMLprojectDescription);
            if (projects.images.length > 0) {
                projects.images.forEach(function(img) {
                    var formattedHTMLprojectImage = HTMLprojectImage.replace(data, img);
                    $(".project-entry:last").append(formattedHTMLprojectImage);
                });
            }
        });
    }
};

projects.display();

//internationalize the name
$("#name").hover(
    function() {
        var n = $(this).text();
        var names = n.split(" ");
        names[1] = names[1].toUpperCase();
        names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
        var finalName = names.join(" ");
        $("#name").text(finalName);
    },
    function() {
        $("#name").text(bio.name);
    }
);

//toggle the bio picture
$(".biopic").click(
    function() {
        if ($(this).attr("src") === "images/me.JPG") {
            $(this).attr("src", "images/me2.JPG");
        } else {
            $(this).attr("src", "images/me.JPG");
        }
    });

//bounce text
$(".bounce").click(
    function() {
        $(this).effect("bounce", "slow");
    });

//to display the map
$("#mapDiv").append(googleMap);