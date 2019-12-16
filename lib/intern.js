const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, school, id, email, title){
        super(name, id, email, title);
        this.school = school

        
    };
    
    getSchool() {
        return this.school;
    };
    getRole() {
        return "Intern";
    };
}

module.exports = Intern;