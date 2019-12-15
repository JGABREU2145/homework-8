const Employee = require("employee");

class Manager extends Employee {
    constructor(officeNumber,name, id, email, title){
        this.officeNumber = officeNumber

        super(name, id, title, email, title)
    }
    
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;