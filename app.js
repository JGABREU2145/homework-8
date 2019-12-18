const Employee = require("./lib/employee.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");

const inquirer = require("inquirer");
const fs = require("fs");


inquirer.prompt([
    {
        type: "input",
        message: "Name your team",
        name: "teamName",
        default: "Justin Team"
    },
    {
        type: "list",
        message: "Please enter your role in the team:",
        choices: ['Manager', 'Engineer', 'Intern'],
        name: "role"
    },   
    {
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