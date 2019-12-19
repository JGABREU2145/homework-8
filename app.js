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

var ID = 0;



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
                console.log(checkTeamData);
                console.log(teamData)
                generateHTML()
            }
            else {
                userMenu();
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
        teamData.teamName = answers.teamName;
        (console.log(teamData.teamName))
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
                answers.name[0],
                ID++,
                createEmail(),
                answers.role,   
                answers.officeNumber   
                )
                console.log(teamData.manager)
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

        teamData.engineer = new Engineer(
                answers.name,
                ID++,
                createEmail(),
                answers.role,   
                answers.ghUsername    
                )
                console.log(teamData.engineer)
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

        teamData.intern = new Intern(
                answers.name,
                ID++,
                createEmail(),
                answers.role,   
                answers.school    
                )
                console.log(teamData.intern)
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
}

function generateHTML() {
	// use teamData to generate your html
}



userMenu();

    /*{
        message: "Enter your name:",
        name: "managerName",
        when: (answers) => answers.role === 'Manager',
        default: "Justin Abreu"
    },
    {
        message: "Enter your office number:",
        name: "officeNumber",
        when: (answers) => answers.role === 'Manager',
        default: "001"    
    },
    {
        type: "list",
        message: "Please enter your role in the team:",
        choices: ['Manager', 'Engineer', 'Intern'],
        name: "role"
    },   
    {
        message: "Enter your name:",
        name: "engineerName",
        when: (answers) => answers.role === 'Engineer'
    },  
    {
        message: "Please enter github username:",
        name: "githubUsername",
        when: (answers) => answers.role === 'Engineer'
    },     
    {
        type: "list",
        message: "Please enter your role in the team:",
        choices: ['Manager', 'Engineer', 'Intern'],
        name: "role"
    },   
    {
        message: "Enter your name:",
        name: "internName",
        when: (answers) => answers.role === 'Intern'
    },  
    {
        message: "Please enter the name of the school you attend:",
        name: "school",
        when: (answers) => answers.role === 'Intern'
    }
])
.then(answers => {
    let ID = 1
    console.log(answers)
    const managerAnswers = [answers.managerName, answers.officeNumber];
    //const engineerAnswers = [];
    //const internanswers = [];
    function createEmail(name) {
        name = answers.managerName
        var nameLowerCase = name.toLowerCase();
        var nameSplit = nameLowerCase.split(' ');
        var nameCreate = nameSplit[0].slice(0,1);
        var email = (nameCreate + '.' + nameSplit[nameSplit.length -1]) + "@email.com";
        
        return email;
    };    
    
    const newManager = new Manager(
    managerAnswers[0],
    ID++,
    createEmail(),
    answers.role,   
    managerAnswers[1]    
    )
    console.log(newManager)
})





/*function createEmail(name) {
    name = answers.managerName
    var nameLowerCase = name.toLowerCase();
    var nameSplit = nameLowerCase.split(' ');
    var nameCreate = nameSplit[0].slice(0,1);
    var email = (nameCreate + '.' + nameSplit[nameSplit.length -1]) + "@email.com";
    
    return email;
};*/