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
        name: "teamName"
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
        when: (answers) => answers.role === 'Manager'
    },
    {
        message: "Enter your office number:",
        name: "officeNumber",
        when: (answers) => answers.role === 'Manager'
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
    console.log(answers)
})