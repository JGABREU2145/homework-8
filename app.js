const Employee = require("./lib/employee.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");

const inquirer = require("inquirer");
const fs = require("fs");

const teamData = {
    teamName: null,
    manager: null,
    engineers: [],
    interns: []
};

var ID = 1;

function userMenu() {
    inquirer.prompt([
    {
        type: "list",
        message: "What would you like to do?",
        choices: ['1. Name team', '2. Add an Employee', '3. Publish team page'],
        name: "choice"
    }
    ])
    .then ((answers) => {
        if (answers.choice === '1. Name team'){
            nameTeam();
            //userMenu();
        }
        else if (answers.choice === '2. Add an Employee') {
            addEmployee();
            //userMenu();
        }
        else if (answers.choice === '3. Publish team page'){
            if (checkTeamData()) {                
                console.log(teamData);
                console.log("This is from line 39");
                userMenu();
            }
            else {
                console.log("This is from line 43");
                console.log(teamData);
               return generateHTML(teamData);
                
            }
        }

    });



function nameTeam() {
    inquirer.prompt([
        {
            type: "input",
            message: "Name your team",
            name: "team",
            default: "Justin Team"
        }
    ])
    .then((answers) => {
        teamData.teamName = answers.team;
        (console.log(teamData))
    })    
    .then(() => {
        userMenu();
    }) 
};

function addEmployee() {
    inquirer.prompt([
    {
        type: "list",
        message: "What type of employee would you like to add?",
        choices: ['1.Manager(required)', '2. Engineer', '3. Intern'],
        name: "choice" 
    }
    ])
    .then((answers) => {
        if (answers.choice === '1.Manager(required)') {
            promptManagerQuestions()
        }
        else if (answers.choice === '2. Engineer') {
            promptEngineerQuestions()
        }
        else if(answers.choice === '3. Intern') {
            promptInternQuestions();
        }
    });

};

function promptManagerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter role",
            name: "role",
            default: "Manager"    
        },
        {
            type: "input",
            message: "Enter your name:",
            name: "name",           
            default: "Justin Abreu"
        },
        {
            type: "input",
            message: "Enter your office number:",
            name: "officeNumber",
            default: "001"    
        }
    ])
    .then((answers) => {
        function createEmail(name) {
            name = answers.name;
            var nameLowerCase = name.toLowerCase();
            var nameSplit = nameLowerCase.split(' ');
            var nameCreate = nameSplit[0].slice(0,1);
            var email = (nameCreate + '.' + nameSplit[nameSplit.length -1]) + "@email.com";
            
            return email;
        };
        teamData.manager = new Manager(
                answers.name,
                ID++,
                createEmail(),
                answers.role,   
                answers.officeNumber   
                )
                console.log(teamData.manager.name)
        }) 
        .then(() => {
            userMenu();
        }) 
};

function promptEngineerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter your role:",
            name: "role",           
            default: "Engineer"
        },
        {
            type: "input",
            message: "Enter your name:",
            name: "name",           
            default: "Justin Abreu"
        },
        {
            type: "input",
            message: "Enter your Github username:",
            name: "ghUsername",
            default: "JGABREU2145"    
        }
    ])
    .then((answers) => {
        function createEmail(name) {
            name = answers.name;
            var nameLowerCase = name.toLowerCase();
            var nameSplit = nameLowerCase.split(' ');
            var nameCreate = nameSplit[0].slice(0,1);
            var email = (nameCreate + '.' + nameSplit[nameSplit.length -1]) + "@email.com";
            
            return email;
        };

        teamData.engineers = new Engineer(
                answers.name,
                ID++,
                createEmail(),
                answers.role,   
                answers.ghUsername    
                )
                console.log(teamData.engineers.name)
        })
        .then(() => {
            userMenu();
        }) 
};

function promptInternQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter your role:",
            name: "role",           
            default: "Intern"
        },
        {
            type: "input",
            message: "Enter your name:",
            name: "name",           
            default: "Justin Abreu"
        },
        {
            type: "input",
            message: "Enter the name of the school that you attend:",
            name: "school",
            default: "School University"    
        }
    ])
    .then((answers) => {
        function createEmail(name) {
            name = answers.name;
            var nameLowerCase = name.toLowerCase();
            var nameSplit = nameLowerCase.split(' ');
            var nameCreate = nameSplit[0].slice(0,1);
            var email = (nameCreate + '.' + nameSplit[nameSplit.length -1]) + "@email.com";
            
            return email;
        };

        teamData.interns = new Intern(
                answers.name,
                ID++,
                createEmail(),
                answers.role,   
                answers.school    
                )
                console.log("This is from line 223");
                console.log(teamData);
        })
        .then(() => {
            userMenu();
        })  
};

function checkTeamData() {
	// only requirements for generating the html is that we must have a team name and at least one manager
	if (teamData.teamName && teamData.teamName.length > 0 && teamData.manager !== null && (teamData.interns.length > 0 || teamData.engineers.length > 0)) {
		return true;
	} 
	else {
		return false;
	}
};

function HTML(teamData) {  
   var print =   
     `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="javascript" href="../lib/employee.js">
    <link rel="javascript" href="../lib/manager.js">
    <link rel="javascript" href="../lib/intern.js">
    <link rel="javascript" href="../lib/engineer.js">
    <link rel="mainpage" type="text/html" href="main.html">
    <link rel="engineerpage" type="text/html" href="engineer.html">
    <link rel="internpage" type="text/html" href="intern.html">
    <link rel="managerpage" type="text/html" href="manager.html">
    <title>Your Team Viewer</title>
</head>
<body>
     <div class="jumbotron">
        <h1 class="display-3">${teamData.teamName}</h1>
        <p class="lead">View and manage your team </p>
        <hr class="my-2">
        <div style="padding-top: 20px;">
            <div class="nav justify-content-center">
                <li class="nav-item bg-primary">
                    <a class="nav-link text-white" href="main.html" target="_self">Team</a>
                </li>
                <li class="nav-item bg-primary" >
                  <a class="nav-link text-white" href="manager.html" target="_self">Managers</a>
                </li>
                <li class="nav-item bg-primary">
                  <a class="nav-link text-white" href="engineer.html" target="_self">Engineers</a>
                </li>
                <li class="nav-item bg-primary">
                    <a class="nav-link text-white" href="intern.html" target="_self">Interns</a>
                </li>                
            </div>
        </div>
        
    </div>
<div class="container">
    <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4">
            <div class="card h-100">
            <img src="../images/person-placeholder.jpg" class="card-img-top" alt="...">
            <div class="card-body">                
                <h5 class="card-title">${teamData.manager.name}</h5>
                <p class="card-text">${teamData.manager.role}</p>
                <p class="card-text">${teamData.manager.email}</p>
                <p class="card-text">${teamData.manager.id}</p>
                <p class="card-text">${teamData.manager.officeNumber}</p>
            </div>
            </div>
        </div>
        <div class="col mb-4">
            <div class="card h-100">
            <img src="../images/person-placeholder.jpg" class="card-img-top" alt="Person placeholer image">
            <div class="card-body">
            <h5 class="card-title">${teamData.engineers.name}</h5>
            <p class="card-text">${teamData.engineers.role}</p>
            <p class="card-text">${teamData.engineers.email}</p>
            <p class="card-text">${teamData.engineers.id}</p>
            <p class="card-text">${teamData.engineers.GHUsername}</p>
            </div>
            </div>
        </div>
        <div class="col mb-4">
            <div class="card h-100">
            <img src="../images/person-placeholder.jpg" class="card-img-top" alt="Person placeholer image">
            <div class="card-body">
            <h5 class="card-title">${teamData.interns.name}</h5>
            <p class="card-text">${teamData.interns.role}</p>
            <p class="card-text">${teamData.interns.email}</p>
            <p class="card-text">${teamData.interns.id}</p>
            <p class="card-text">${teamData.interns.school}</p></div>
            </div>
        </div>        
    </div>    
</div>
</body>
</html>
    `;
    return print
}

function generateHTML(teamData) {
    console.log(`This is from line 330`)
    console.log(teamData)
    const html = HTML(teamData)

    return fs.writeFile("./templates/main.html", html, function(){});
    
    // .then(function() {
    //     console.log("Successfully wrote to main.html")
    // })
    // .catch(function(err) {
    //     console.log(err);
    // });
};

};

userMenu();
