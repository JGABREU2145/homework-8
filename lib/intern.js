const Employee = require("employee");

class Intern extends Employee {
    constructor(school,name, id, email, title){
        this.school = school

        super(name, id, title, email, title)
    }
    
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;