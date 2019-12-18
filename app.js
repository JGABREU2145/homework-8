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
            userMenu();
        }
        else if (answers.choice === '2. Add an Employee') {
            addEmployee();
            userMenu();
        }
        else if (answers.choice === '3. Publish team page'){
            if (checkTeamData()) {
                generateHTML()
            }
            else {
                userMenu();
            }
        }

    });

};

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
    })
};


function addEmployee() {}
    inquirer.prompt([
    {
        type: "list",
        message: "What type of employee would you like to add?",
        choices: ['1.Manager(required)', '2. Engineer', '3. Intern'],
        name: "choice" 
    }
    ])
    .then((answers) => {
        if (answers.choices === '1.Manager(required)') {
            promptManagerQuestions()
        }
        else if (answers.choices === '2. Engineer') {
            promptEngineerQuestions()
        }
        else (answers.choices === '3. Intern') 
            promptInternQuestions();
        
    });


function promptManagerQuestions() {
    inquirer.prompt([
        {
            message: "Enter your name:",
            name: "managerName",           
            default: "Justin Abreu"
        },
        {
            message: "Enter your office number:",
            name: "officeNumber",
            default: "001"    
        }
    ])
    .then((answers) => {
        teamData.manager = new Manager(
                managerAnswers[0],
                ID++,
                createEmail(),
                answers.role,   
                managerAnswers[1]    
                )
                console.log(newManager)
        })     
};

function promptEngineerQuestions() {
    inquirer.prompt([
        {
            message: "Enter your name:",
            name: "engineerName",           
            default: "Justin Abreu"
        },
        {
            message: "Enter your Github username:",
            name: "ghUsername",
            default: "JGABREU2145"    
        }
    ])
    .then((answers) => {
        teamData.engineer = new Engineer(
                engineerAnswers[0],
                ID++,
                createEmail(),
                answers.role,   
                engineerAnswers[1]    
                )
                console.log(newEngineer)
        });
};

function promptInternQuestions() {
    inquirer.prompt([
        {
            message: "Enter your name:",
            name: "internName",           
            default: "Justin Abreu"
        },
        {
            message: "Enter the name of the school that you attend:",
            name: "school",
            default: "School University"    
        }
    ])
    .then((answers) => {
        teamData.intern = new Intern(
                internAnswers[0],
                ID++,
                createEmail(),
                answers.role,   
                internAnswers[1]    
                )
                console.log(newIntern)
        }) 
};

function checkATeamData() {
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