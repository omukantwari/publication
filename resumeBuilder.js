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
     "skills": ["programming", "AD", "windows", "JS"],
     "bioPic": "images/peacok.jpg",
     "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);        
        var formattedMobile = HTMLmobile.replace("%data", bio.contacts.mobile);
        $("#contacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data", bio.contacts.mobile);
        $("#contacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#contacts").append(formattedGithub);
        var formattedLocation = HTMLlocation.replace("%data", bio.contacts.location);
        $("#contacts").append(formattedLocation);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data", bio.welcomeMessage);
        $("#contacts").append(formattedWelcomeMessage);
        var formattedSkills = HTMLskills.replace("%data%", bio.skills);
        $("#header").append(formattedSkills);
    }
  
}

bio.display();
