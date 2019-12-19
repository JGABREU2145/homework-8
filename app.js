const Employee = require("./lib/employee.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util")

const writeFileAsync = util.promisify(fs.writeFile);

const teamData = {
    teamName: null,
    manager: null,
    engineers: [],
    interns: []
};
console.log(teamData + "This is from line 18")
var ID = 1;



function userMenu() {

    let teamData = {
        teamName: null,
        manager: null,
        engineers: [],
        interns: []
    };

    return inquirer.prompt([
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
        }
        else if (answers.choice === '2. Add an Employee') {
            addEmployee();            
        }
        else if (answers.choice === '3. Publish team page'){
            if (checkTeamData() === false) {                
                console.log("Manager and Team Name Required!")
                userMenu();                
            }
            else {
                generateHTML(teamData)
            }
        }

    });
}


function nameTeam() {
    inquirer.prompt([
        {
            type: "input",
            message: "Name your team",
            name: "teamName",
            default: "Justin Team"
        }
    ])
    .then((answers) => {
        teamData.teamName =(answers.teamName);     
        console.log(teamData.teamName)   
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

}

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
        console.log(teamData +  "THis is from mangers")
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
            default: "John Smite"
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

        teamData.engineers.push(new Engineer(
            answers.name,
            ID++,
            createEmail(),
            answers.role,   
            answers.ghUsername    
            )
        )
            console.log(teamData +  "THis is from engineers")
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
            default: "Sean Anders"
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

        teamData.interns.push( new Intern(
            answers.name,
            ID++,
            createEmail(),
            answers.role,   
            answers.school    
            )
        )
            console.log(teamData +  "THis is from interns")
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


console.log(teamData +  "THis is from line 244")

function generateHTML(teamData) {
    console.log(teamData + "THis is from line 246");
    const html = `
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
                <h5 class="card-title">${teamData.manager.Manager.name}</h5>
                <p class="card-text">${teamData.manager.Manager.role}</p>
                <p class="card-text">${teamData.manager.Manager.email}</p>
                <p class="card-text">${teamData.manager.Manager.id}</p>
                <p class="card-text">${teamData.manager.Manager.officeNumber}</p>
            </div>
            </div>
        </div>
        <div class="col mb-4">
            <div class="card h-100">
            <img src="../images/person-placeholder.jpg" class="card-img-top" alt="Person placeholer image">
            <div class="card-body">
            <h5 class="card-title">${teamData.engineers[0].Engineer.name}</h5>
            <p class="card-text">${teamData.engineers[0].Engineer.role}</p>
            <p class="card-text">${teamData.engineers[0].Engineer.email}</p>
            <p class="card-text">${teamData.engineers[0].Engineer.id}</p>
            <p class="card-text">${teamData.engineers[0].Engineer.GHUsername}</p>
            </div>
            </div>
        </div>
        <div class="col mb-4">
            <div class="card h-100">
            <img src="../images/person-placeholder.jpg" class="card-img-top" alt="Person placeholer image">
            <div class="card-body">
            <h5 class="card-title">${teamData.interns[0].intern.name}</h5>
            <p class="card-text">${teamData.interns[0].intern.role}</p>
            <p class="card-text">${teamData.interns[0].intern.email}</p>
            <p class="card-text">${teamData.interns[0].intern.id}</p>
            <p class="card-text">${teamData.interns[0].intern.school}</p></div>
            </div>
        </div>        
    </div>    
</div>
</body>
</html>
    `;
    return writeFileAsync("main.html", html)
    .then(function() {
        console.log("Successfully wrote to main.html")
    })
    .catch(function(err) {
        console.log(err);
    });
};


userMenu();
